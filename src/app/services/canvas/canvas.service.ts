import { Injectable } from '@angular/core';
import * as R from 'ramda';
import { Shape, CircleShape, RectShape, PolylineShape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';
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
    console.log('add');
    this.shapeHandler$.next((shapes: Shape[]) => shapes.concat(shape));
  }

  remove = (id: string): void => {
    this.shapeHandler$.next((shapes: Shape[]) => shapes.filter((shape: Shape) => shape.id !== id));
  }

  changeState = (id: string, state: ShapeStateEnum): void => {
    this.shapeHandler$.next((shapeStore: Shape[]) => {
      const shape = shapeStore.find((item: Shape) => item.id === id);

      if (shape) {
        shape.setState(state);
      }

      return shapeStore;
    });
  }

  filterBy(fn: Function): OperatorFunction<Shape[], Shape[]> {
    return (source$: Observable<Shape[]>): Observable<Shape[]> => {
      return source$.pipe(
        map((shapes: Shape[]) => shapes.filter((shape: Shape) => fn(shape)))
      );
    };
  }

  addOnce(shape: Shape): () => void {
    return R.once(() => this.add(shape));
  }

  public get hoveredShape(): Shape {
    return this.hoveredShape$.value;
  }
}
