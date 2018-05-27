import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Shape } from '@tools/shapes/shape';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { scan, filter, map, switchMap, tap } from 'rxjs/operators';
import { PolylineShape } from '@tools/shapes';
import { OperatorFunction } from 'rxjs/interfaces';

@Injectable()
export class ShapeService {
  private shapesStore$: ReplaySubject<Shape[]> = new ReplaySubject<Shape[]>();
  public shapes$: Observable<Shape[]>;
  public polylines$: Observable<Shape[]>;
  public circles$: Observable<Shape[]>;

  constructor(private store: Store<AppState>) {
    this.store
      .select('app')
      .select('shapes')
      .subscribe(this.shapesStore$);

    this.shapes$ = this.shapesStore$
      .pipe(
        scan(
          (shapes: Shape[], updatedShapes: Shape[]) => {
            return shapes.concat(updatedShapes);
          },
          []
        )
      );

    this.polylines$ = this.shapes$.pipe(this.filterBy('polyline'));
    this.circles$ = this.shapes$.pipe(this.filterBy('circle'));
  }

  filterBy(shapeType: string): OperatorFunction<Shape[], Shape[]> {
    return (source$: Observable<Shape[]>): Observable<Shape[]> => {
      return source$.pipe(
        map((shapes: Shape[]) => {
          return shapes.filter((shape: Shape) => shape.is(shapeType));
        })
      );
    };
  }

  add(shape: Shape): void {
    this.shapesStore$.next([shape]);
  }
}
