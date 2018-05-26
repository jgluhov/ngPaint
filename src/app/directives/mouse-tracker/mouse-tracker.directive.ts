import { Directive, Injectable, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { Point2D } from '../../modules/tools/shapes/point2d';
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
export class MouseTrackerDirective {
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
        tap((evt: MouseEvent) => evt.preventDefault())
      );
  }

  onStart(): Observable<MouseEvent> {
    return this.fromEvent('mousedown');
  }

  trackMouse(evt: MouseEvent): Observable<Point2D> {
    return this.fromEvent('mousemove')
      .pipe(
        startWith(evt),
        map(this.toCoords),
        takeUntil(this.end$)
      );
  }

  toCoords = (evt: MouseEvent): Point2D => {
    const p = this.elRef.nativeElement.createSVGPoint();
    p.x = evt.clientX;
    p.y = evt.clientY;

    return <Point2D>p.matrixTransform(this.elRef.nativeElement.getScreenCTM().inverse());
  }
}
