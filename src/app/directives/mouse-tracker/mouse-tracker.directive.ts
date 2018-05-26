import { Directive, Injectable, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import {
  switchMap,
  takeUntil,
  startWith,
  map,
  tap,
  mapTo,
  take,
  takeWhile
} from 'rxjs/operators';

@Directive({
  selector: '[appMouseTracker]'
})
export class MouseTrackerDirective implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  public mousedown$: Observable<MouseEvent> = this.fromEvent('mousedown');
  constructor(private elRef: ElementRef) {
  }

  fromEvent(name: string): Observable<MouseEvent> {
    return fromEvent(this.elRef.nativeElement, name)
      .pipe(
        tap((evt: MouseEvent) => evt.preventDefault()),
        takeUntil(this.destroy$)
      );
  }

  trackMouse(evt: MouseEvent): Observable<SVGPoint> {
    const mousemove$ = this.fromEvent('mousemove');
    const end$ = merge(
      this.fromEvent('mouseup'),
      this.fromEvent('mouseleave'),
      this.destroy$
    );

    return mousemove$
      .pipe(
        startWith(evt),
        takeUntil(end$),
        map(this.toCoords)
      );
  }

  toCoords = (evt: MouseEvent): SVGPoint => {
    const p = this.elRef.nativeElement.createSVGPoint();
    p.x = evt.clientX;
    p.y = evt.clientY;

    return p.matrixTransform(this.elRef.nativeElement.getScreenCTM().inverse());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
