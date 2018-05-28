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
  constructor(private elRef: ElementRef) {
  }

  fromEvent(name: string): Observable<Point2D> {
    return fromEvent(this.elRef.nativeElement, name)
      .pipe(
        tap((evt: MouseEvent) => evt.preventDefault()),
        map(this.toCoords)
      );
  }

  onMouseUp(): Observable<Point2D> {
    return this.fromEvent('mouseup');
  }

  onMouseDown(): Observable<Point2D> {
    return this.fromEvent('mousedown');
  }

  onMouseMove(): Observable<Point2D> {
    return this.fromEvent('mousemove');
  }

  toCoords = (evt: MouseEvent): Point2D => {
    const p = this.elRef.nativeElement.createSVGPoint();
    p.x = evt.clientX;
    p.y = evt.clientY;

    return <Point2D>p.matrixTransform(
      this.elRef.nativeElement.getScreenCTM().inverse()
    );
  }
}
