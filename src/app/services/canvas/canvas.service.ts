import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Shape } from '@tools/shapes/shape';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';
import { scan, filter, map, switchMap, tap, share, mergeMap, withLatestFrom, startWith } from 'rxjs/operators';
import { PolylineShape } from '@tools/shapes';
import { OperatorFunction } from 'rxjs/interfaces';
import { CircleShape } from '@shapes/circle';

@Injectable()
export class CanvasService {
  public canvasShapes$: Observable<Shape[]>;

  private canvasHandler: Subject<Function> = new Subject<Function>();
  private storeChanges$: Observable<Shape[]>;

  public polylines$: Observable<PolylineShape[]>;
  public circles$: Observable<CircleShape[]>;

  constructor(private store: Store<AppState>) {
    this.storeChanges$ = this.store
      .select('app')
      .select('shapes');

    this.canvasShapes$ = this.canvasHandler
      .pipe(
        scan(
          (shapes: Shape[], updatedFn: Function) => {
            return updatedFn(shapes);
          },
          []
        ),
        share()
      );

    this.polylines$ = <Observable<PolylineShape[]>>this.canvasShapes$
      .pipe(this.filterBy('polyline'));
    this.circles$ = <Observable<CircleShape[]>>this.canvasShapes$
      .pipe(this.filterBy('circle'));
  }

  add = (shape: Shape): void => {
    this.canvasHandler.next((shapeStore: Shape[]) => shapeStore.concat(shape));
  }

  filterBy(shapeType: string): OperatorFunction<Shape[], Shape[]> {
    return (source$: Observable<Shape[]>): Observable<Shape[]> => {
      return source$.pipe(
        map((shapes: Shape[]) => {
          return shapes.filter((shape: Shape) => shape.ofType(shapeType));
        })
      );
    };
  }
}
