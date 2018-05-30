import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Shape } from '@tools/shapes/shape';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { Subject } from 'rxjs/Subject';
import { scan, filter, map, share, tap } from 'rxjs/operators';
import { PolylineShape } from '@tools/shapes';
import { OperatorFunction } from 'rxjs/interfaces';
import { CircleShape } from '@shapes/circle';
import { RectShape } from '@shapes/rect/rect';

@Injectable()
export class CanvasService {
  private canvasHandler: Subject<Function> = new Subject<Function>();
  private storeChanges$: Observable<Shape[]>;

  public canvasShapes$: Observable<Shape[]>;
  public polylines$: Observable<PolylineShape[]>;
  public circles$: Observable<CircleShape[]>;
  public rects$: Observable<RectShape[]>;

  constructor(private store: Store<AppState>) {
    this.storeChanges$ = this.store
      .select('app')
      .select('shapes');

    this.canvasShapes$ = this.canvasHandler
      .pipe(
        scan((shapes: Shape[], fn: Function) => fn(shapes), []),
        tap((shapes: Shape[]) => {
          console.log(shapes);
        }),
        share()
      );

    this.polylines$ = this.getShapes$('polyline');
    this.circles$ = this.getShapes$('circle');
    this.rects$ = this.getShapes$('rect');
  }

  getShapes$<T extends Shape>(type: string): Observable<T[]> {
    return <Observable<T[]>>this.canvasShapes$
      .pipe(this.filterBy(((shape: T): boolean => shape.ofType(type))));
  }

  render = (shape: Shape): void => {
    this.canvasHandler.next((shapeStore: Shape[]) => shapeStore.concat(shape));
  }

  complete(shape: Shape): void {
    shape.editing = false;
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
