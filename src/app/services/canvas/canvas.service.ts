import { Injectable } from '@angular/core';
import * as R from 'ramda';
import { Shape } from '@shapes/shape';
import { CircleShape } from '@shapes/circle/circle-shape';
import { RectShape } from '@shapes/rect/rect-shape';
import { PolylineShape } from '@shapes/polyline/polyline-shape';
import { ShapeStateEnum, SVGShapeEnum } from '@tools/enums';
import { BehaviorSubject, Subject, from, Observable, OperatorFunction } from 'rxjs';
import {
  distinctUntilChanged,
  scan,
  filter,
  map,
  share,
  tap,
  startWith
} from 'rxjs/operators';

@Injectable()
export class CanvasService {
  private shapeHandler$: Subject<Function> = new Subject<Function>();
  public shapeStore$: Observable<Shape[]>;
  public shapes$: Observable<Shape[]>;
  public hoveredShape$: BehaviorSubject<Shape> = new BehaviorSubject(null);

  public polylines$: Observable<PolylineShape[]>;
  public circles$: Observable<CircleShape[]>;
  public rects$: Observable<RectShape[]>;

  constructor() {
    this.shapeStore$ = this.shapeHandler$
      .pipe(
        scan((shapes: Shape[], fn: Function) => fn(shapes), []),
        startWith([]),
        share()
      );

    this.polylines$ = this.getShapes$('polyline');
    this.circles$ = this.getShapes$('circle');
    this.rects$ = this.getShapes$('rect');
  }

  getShapes$<T extends Shape>(type: string): Observable<T[]> {
    return <Observable<T[]>>this.shapeStore$
      .pipe(
        this.filterBy(((shape: T): boolean => shape.ofType(type))),
        distinctUntilChanged((a: Shape[], b: Shape[]) => R.equals(a, b))
      );
  }

  add = (shape: Shape): void => {
    this.shapeHandler$.next(
      (shapes: Shape[]) => shapes.concat(shape)
    );
  }

  remove = (removedShape: Shape): void => {
    this.shapeHandler$.next((shapes: Shape[]) => {
      return shapes.filter((shape: Shape) => shape.id !== removedShape.id);
    });
  }

  replace = (replacedShape: Shape): void => {
    this.shapeHandler$.next((shapes: Shape[]) => {
      return shapes.filter((shape: Shape) => shape.id !== replacedShape.id).concat(replacedShape);
    });
  }

  setState = (id: string, state: ShapeStateEnum): void => {
    this.shapeHandler$.next((shapeStore: Shape[]) => {
      const shape = shapeStore.find((item: Shape) => item.id === id);

      if (shape) {
        shape.setState(state);
      }

      return shapeStore;
    });
  }

  setStable(shape: Shape): void {
    this.setState(shape.id, ShapeStateEnum.STABLE);
  }

  update(): void {
    this.shapeHandler$.next((shapeStore: Shape[]) => shapeStore);
  }

  setDragging(shape: Shape): void {
    this.setState(shape.id, ShapeStateEnum.DRAGGING);
  }

  filterBy(fn: Function): OperatorFunction<Shape[], Shape[]> {
    return (source$: Observable<Shape[]>): Observable<Shape[]> => {
      return source$.pipe(
        map((shapes: Shape[]) => shapes.filter((shape: Shape) => fn(shape)))
      );
    };
  }

  public get hoveredShape(): Shape {
    return this.hoveredShape$.value;
  }
}
