import { Directive, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Point2D } from '@math/point2d';
import { map, tap } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';

@Directive({
  selector: '[appMouseService]'
})
export class MouseServiceDirective {
  constructor(private elRef: ElementRef) {
  }

  fromEvent(name: string): Observable<MouseEvent> {
    return fromEvent(this.elRef.nativeElement, name)
      .pipe(tap((evt: MouseEvent) => evt.preventDefault()));
  }

  onMouseUp(): Observable<Point2D> {
    return this.fromEvent('mouseup').pipe(map(this.toCoords));
  }

  onMouseDown(): Observable<Point2D> {
    return this.fromEvent('mousedown').pipe(map(this.toCoords));
  }

  onMouseMove(): Observable<Point2D> {
    return this.fromEvent('mousemove').pipe(map(this.toCoords));
  }

  onMouseLeave(): Observable<MouseEvent> {
    return this.fromEvent('mouseleave');
  }

  onEnd(): Observable<MouseEvent> {
    return merge(
      this.fromEvent('mouseup'),
      this.fromEvent('mouseleave')
    );
  }

  toCoords = (evt: MouseEvent): Point2D => {
    const p = this.elRef.nativeElement.createSVGPoint();
    p.x = evt.clientX;
    p.y = evt.clientY;

    const point = p.matrixTransform(
      this.elRef.nativeElement.getScreenCTM().inverse()
    );

    return new Point2D(point.x, point.y);
  }
}
