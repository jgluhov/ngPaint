import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Shape } from '@tools/shapes/shape';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';
import { scan, filter, map, share, pairwise } from 'rxjs/operators';
import { PolylineShape } from '@tools/shapes';
import { OperatorFunction } from 'rxjs/interfaces';
import { CircleShape } from '@shapes/circle/circle';
import { RectShape } from '@shapes/rect/rect';
import { App } from '@store/reducers/app.reducer';
import { difference, length } from 'ramda';

@Injectable()
export class CanvasService {
  private canvasHandler: Subject<Function> = new Subject<Function>();
  private storeShapes$: Observable<Shape[]>;
  private newbies$: Observable<Shape[]>;

  private canvasShapes$: Observable<Shape[]>;
  private shapes$: Observable<Shape[]>;
  public polylines$: Observable<PolylineShape[]>;
  public circles$: Observable<CircleShape[]>;
  public rects$: Observable<RectShape[]>;

  constructor(private store: Store<AppState>) {
    this.storeShapes$ = this.store
      .select('app')
      .pipe(map((app: App) => app.shapes));

    this.canvasShapes$ = this.canvasHandler
      .pipe(
        scan((shapes: Shape[], fn: Function) => fn(shapes), []),
        share()
      );

    this.newbies$ = this.storeShapes$
      .pipe(
        pairwise(),
        map(([previous, next]: [Shape[], Shape[]]) => difference(next, previous)),
        filter((shapes: Shape[]) => length(shapes))
      );

    this.polylines$ = this.getShapes$('polyline');
    this.circles$ = this.getShapes$('circle');
    this.rects$ = this.getShapes$('rect');

    this.newbies$
      .subscribe((shapes: Shape[]) => shapes.forEach(this.add));
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
