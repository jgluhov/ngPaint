import { Directive, Injectable, ElementRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import {
  buffer,
  takeUntil,
  startWith,
  map,
  tap,
  mapTo,
  take,
  takeWhile,
  mergeMap
} from 'rxjs/operators';

@Directive({
  selector: '[appMouseTracker]'
})
export class MouseTrackerDirective implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private start$: Observable<MouseEvent>;
  private end$: Observable<MouseEvent>;

  constructor(private elRef: ElementRef) {
    this.start$ = this.fromEvent('mousedown');
    this.end$ = merge(
      this.fromEvent('mouseup'),
      this.fromEvent('mouseleave')
    );
  }

  fromEvent(name: string): Observable<MouseEvent> {
    return fromEvent(this.elRef.nativeElement, name)
      .pipe(
        tap((evt: MouseEvent) => evt.preventDefault()),
        takeUntil(this.destroy$)
      );
  }

  onStart(): Observable<MouseEvent> {
    return this.fromEvent('mousedown');
  }

  trackMouse(evt: MouseEvent): Observable<SVGPoint> {
    return this.fromEvent('mousemove')
      .pipe(
        startWith(evt),
        map(this.toCoords),
        takeUntil(this.end$)
      );
  }

  bufferMouse(evt: MouseEvent): Observable<SVGPoint[]> {
    return this.trackMouse(evt)
      .pipe(buffer(this.end$));
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
