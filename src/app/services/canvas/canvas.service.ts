import { Injectable } from '@angular/core';
import { difference, length } from 'ramda';
import { Store } from '@ngrx/store';
import { Shape, CircleShape, RectShape, PolylineShape } from '@shapes';
import { App, AppActions, AppState } from '@store';
import { ShapeStates } from '@tools/types/shape-states';
import { Observable } from 'rxjs/Observable';
import {
  Subject,
  from,
  combineLatest,
  timer,
  scan,
  filter,
  map,
  share,
  pairwise,
  tap,
  startWith,
  OperatorFunction
} from '@rx';

@Injectable()
export class CanvasService {
  private shapeHandler$: Subject<Function> = new Subject<Function>();
  public shapes$: Observable<Shape[]>;

  public polylines$: Observable<PolylineShape[]>;
  public circles$: Observable<CircleShape[]>;
  public rects$: Observable<RectShape[]>;

  constructor(private store: Store<AppState>) {
    this.shapes$ = this.shapeHandler$
      .pipe(
        scan((shapes: Shape[], fn: Function) => fn(shapes), []),
        startWith([]),
        share()
      );

    this.polylines$ = this.getShapes$('polyline');
    this.circles$ = this.getShapes$('circle');
    this.rects$ = this.getShapes$('rect');

    // const randomPoint = (): Point2D => {
    //   return new Point2D(randomNumber(50, 500), randomNumber(50, 500));
    // };

    // const randomCircle = (): CircleShape => {
    //   return new CircleShape(randomPoint(), randomNumber(2, 10));
    // };

    // timer(1000, 1000)
    //   .pipe(
    //     tap(() => {
    //       this.store.dispatch(new AppActions.CreateShape(randomCircle()));
    //     })
    //   ).subscribe();
  }

  getShapes$<T extends Shape>(type: string): Observable<T[]> {
    return <Observable<T[]>>this.shapes$
      .pipe(this.filterBy(((shape: T): boolean => shape.ofType(type))));
  }

  add = (shape: Shape): void => {
    this.shapeHandler$.next((shapes: Shape[]) => shapes.concat(shape));
  }

  changeState = (id: string, state: ShapeStates): void => {
    this.shapeHandler$.next((shapeStore: Shape[]) => {
      const shape = shapeStore.find((item: Shape) => item.id === id);
      shape.state = state;
      shape.children.forEach((child: Shape) => child.state = state);

      return shapeStore;
    });
  }

  filterBy(fn: Function): OperatorFunction<Shape[], Shape[]> {
    return (source$: Observable<Shape[]>): Observable<Shape[]> => {
      return source$.pipe(
        map((shapes: Shape[]) => {
          return shapes.filter((shape: Shape) => fn(shape));
        })
      );
    };
  }
}
