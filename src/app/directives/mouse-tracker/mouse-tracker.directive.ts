import { Directive, Injectable, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
export class MouseTrackerDirective {
  constructor(private elRef: ElementRef) {
  }

  fromEvent(name: string): Observable<MouseEvent> {
    return fromEvent(this.elRef.nativeElement, name)
      .pipe(tap((evt: MouseEvent) => evt.preventDefault()));
  }

  trackMouse(evt: MouseEvent): Observable<SVGPoint> {
    const move$ = this.fromEvent('mousemove');
    const end$ = merge(
      this.fromEvent('mouseup'),
      this.fromEvent('mouseleave')
    );

    return move$
      .pipe(
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

}
