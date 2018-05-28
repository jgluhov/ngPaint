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
import { CircleShape } from '../../shapes/circle';

@Injectable()
export class ShapeService {
  private shapeChanger$: Subject<Function> = new Subject<Function>();
  private shapeChanges: Observable<Shape[]>;
  private storeShapeChanges: Observable<Shape[]>;
  private newbie$: Observable<Shape[]>;
  public polylines$: Observable<PolylineShape[]>;
  public circles$: Observable<CircleShape[]>;

  constructor(private store: Store<AppState>) {
    this.storeShapeChanges = this.store
      .select('app')
      .select('shapes');

    this.shapeChanges = this.shapeChanger$
      .pipe(
        scan(
          (shapes: Shape[], updatedFn: Function) => {
            return updatedFn(shapes);
          },
          []
        ),
        startWith([]),
        share()
      );

    // this.newbie$ = this.storeShapeChanges
    //   .pipe(
    //     withLatestFrom(this.shapeChanges),
    //     map(([storeShapes, shapes]: [Shape[], Shape[]]) => {
    //       return storeShapes.filter((shape: Shape) => {
    //         return !shapes.find((s: Shape) => s.id === shape.id);
    //       });
    //     })
    //   );

    // this.newbie$.subscribe(this.add);
    this.polylines$ = <Observable<PolylineShape[]>>this.shapeChanges.pipe(this.filterBy('polyline'));
    this.circles$ = <Observable<CircleShape[]>>this.shapeChanges.pipe(this.filterBy('circle'));
  }

  add = (shapes: Shape[]): void => {
    this.shapeChanger$.next((shapeStore: Shape[]) => shapeStore.concat(shapes));
  }

  clean = (): void => {
    // this.shapeChanger$.next((shapeStore: Shape[]) => shapeStore.filter((shape: Shape) => !shape.temporary));
  }

  render(shape: Shape): void {
    shape.rendered = true;
    this.add([shape]);
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
}
