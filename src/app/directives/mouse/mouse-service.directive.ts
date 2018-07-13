import { Directive, ElementRef } from '@angular/core';
import { not, complement } from 'ramda';
import { Observable, fromEvent, merge, of } from 'rxjs';
import { map, tap, mapTo, startWith, switchMap, first, filter, sample, skip, takeUntil, finalize } from 'rxjs/operators';
import { Point2D } from '@math';
import { Shape } from '@tools/shapes';

export interface ListenOptions< {
  create(start: Point2D): Shape;
  start(shape: Shape): void;
  next?(shape: Shape, point: Point2D): void;
  complete(shape: Shape, withMoves: boolean): void;
}

@Directive({
  selector: '[appMouseService]'
})
export class MouseServiceDirective {
  private mouseDowns$: Observable<Point2D>;
  private mouseUps$: Observable<Point2D>;
  private mouseMoves$: Observable<Point2D>;
  private mouseDrags$: Observable<Point2D>;
  private touchStarts$: Observable<Point2D>;
  private touchMoves$: Observable<Point2D>;
  private touchEnds$: Observable<Point2D>;

  public starts$: Observable<Point2D>;
  public moves$: Observable<Point2D>;
  public ends$: Observable<Point2D>;

  public withMoves$: Observable<boolean>;
  public withoutMoves$: Observable<boolean>;
  public dragging$: Observable<boolean>;

  constructor(private elRef: ElementRef) {
    this.mouseDowns$ = this.fromEvent('mousedown').pipe(map(this.mouseEventToCoordinate));
    this.mouseMoves$ = this.fromEvent('mousemove').pipe(filter(this.isBtnPressed), map(this.mouseEventToCoordinate));
    this.mouseUps$ = this.fromEvent('mouseup').pipe(map(this.mouseEventToCoordinate));
    this.touchStarts$ = this.fromEvent('touchstart').pipe(map(this.touchEventToCoordinate));
    this.touchMoves$ = this.fromEvent('touchmove').pipe(map(this.touchEventToCoordinate));
    this.touchEnds$ = this.fromEvent('touchend').pipe(map(this.touchEventToCoordinate));

    this.starts$ = merge(this.mouseDowns$, this.touchStarts$).pipe(map(this.toSVGCoordinate));
    this.moves$ = merge(this.mouseMoves$, this.touchMoves$).pipe(map(this.toSVGCoordinate));
    this.ends$ = merge(this.mouseUps$, this.touchEnds$).pipe(map(this.toSVGCoordinate));

    this.withMoves$ = merge(
      of(false),
      this.mouseMoves$.pipe(mapTo(true), skip(1))
    )
    .pipe(sample(this.mouseUps$), filter(complement(not)));
  }

  fromEvent(name: string): Observable<MouseEvent> {
    return fromEvent(this.elRef.nativeElement, name)
      .pipe(tap((evt: MouseEvent) => evt.preventDefault()));
  }

  mouseEventToCoordinate(event: MouseEvent): Point2D {
    return new Point2D(event.clientX, event.clientY);
  }

  touchEventToCoordinate(event: TouchEvent): Point2D {
    const touch = event.changedTouches[0];

    return new Point2D(touch.clientX, touch.clientY);
  }

  isBtnPressed = (event: MouseEvent): boolean => {
    return event.buttons === 1;
  }

  listenDrags$({
    create, start, next, complete
  }: ListenOptions): Observable<Point2D> {
    return this.starts$
      .pipe(
        switchMap((point: Point2D) => {
          const shape = create(point);
          start(shape);

          return this.moves$
            .pipe(
              tap((p: Point2D) => next(shape, p)),
              finalize(() => complete(shape, true))
            );
          }
        ));
  }

  listenDrops$({
    create, start, complete
  }: ListenOptions): Observable<boolean> {
    return this.starts$
      .pipe(
        switchMap((point: Point2D) => {
          const shape = create(point);
          start(shape);

          return this.withMoves$
            .pipe(
              tap((withMoves: boolean) => complete(shape, withMoves))
            );
          }
        )
      );
  }

  onMouseUp(): Observable<Point2D> {
    return this.fromEvent('mouseup').pipe(map(this.toSVGCoordinate));
  }

  onMouseDown(): Observable<Point2D> {
    return this.fromEvent('mousedown').pipe(map(this.toSVGCoordinate));
  }

  onMouseMove(): Observable<Point2D> {
    return this.fromEvent('mousemove').pipe(map(this.toSVGCoordinate));
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

  toSVGCoordinate = ({x, y}: Point2D): Point2D => {
    const p = this.elRef.nativeElement.createSVGPoint();
    p.x = x;
    p.y = y;

    const point = p.matrixTransform(
      this.elRef.nativeElement.getScreenCTM().inverse()
    );

    return new Point2D(point.x, point.y);
  }
}
