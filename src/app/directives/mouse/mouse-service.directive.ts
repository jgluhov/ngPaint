import { Directive, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Point2D } from '../../modules/tools/shapes/point2d';
import { map, tap } from 'rxjs/operators';

@Directive({
  selector: '[appMouseService]'
})
export class MouseServiceDirective {
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
