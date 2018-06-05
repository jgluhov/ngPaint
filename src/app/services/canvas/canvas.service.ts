import { Injectable } from '@angular/core';
import { difference, length } from 'ramda';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { timer } from 'rxjs/observable/timer';
import { Subject } from 'rxjs/Subject';
import {
  scan,
  filter,
  map,
  share,
  pairwise,
  tap,
  startWith
} from 'rxjs/operators';
import { OperatorFunction } from 'rxjs/interfaces';
import {
  Shape,
  CircleShape,
  RectShape,
  PolylineShape
} from '@shapes';
import { AppState } from '@store/app-state';
import { App } from '@store/reducers/app.reducer';


import * as AppActions from '@store/actions/app.actions';
import { Point2D } from '@math/point2d';

@Injectable()
export class CanvasService {
  private canvasHandler: Subject<Function> = new Subject<Function>();

  private allStoreShapes$: Observable<Shape[]>;
  private newStoreShapes$: Observable<Shape[]>;

  public canvasShapes$: Observable<Shape[]>;
  public polylines$: Observable<PolylineShape[]>;
  public circles$: Observable<CircleShape[]>;
  public rects$: Observable<RectShape[]>;

  constructor(private store: Store<AppState>) {
    this.allStoreShapes$ = this.store
      .select('app')
      .pipe(map((app: App) => app.shapes));

    this.canvasShapes$ = this.canvasHandler
      .pipe(
        scan((shapes: Shape[], fn: Function) => fn(shapes), []),
        startWith([]),
        share()
      );

    this.newStoreShapes$ = this.allStoreShapes$
      .pipe(
        pairwise(),
        map(([previous, next]: [Shape[], Shape[]]) => {
          return difference(next, previous);
        }),
        filter((shapes: Shape[]) => length(shapes))
      );

    this.polylines$ = this.getShapes$('polyline');
    this.circles$ = this.getShapes$('circle');
    this.rects$ = this.getShapes$('rect');

    combineLatest(this.canvasShapes$, this.newStoreShapes$)
      .pipe(
        map(([canvasShapes, newStoreShapes]: [Shape[], Shape[]]) => {
          return difference(newStoreShapes, canvasShapes);
        }))
      .subscribe((shapes: Shape[]) => shapes.forEach(this.add));

    // const randomNumber = (min: number, max: number): number => {
    //   return Math.floor((Math.random() * (max - min + 1))) + min;
    // };

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
    return <Observable<T[]>>this.canvasShapes$
      .pipe(this.filterBy(((shape: T): boolean => shape.ofType(type))));
  }

  add = (shape: Shape): void => {
    this.canvasHandler.next((shapeStore: Shape[]) => shapeStore.concat(shape));
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
