import { Injectable } from '@angular/core';
import { difference, equals } from 'ramda';
import { Shape, CircleShape, RectShape, PolylineShape } from '@shapes';
import { Observable } from 'rxjs/Observable';
import { ShapeStateEnum } from '@tools/enums';
import { distinctUntilChanged, first } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
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
  public shapeStore$: Observable<Shape[]>;
  public shapes$;
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

    this.polylines$.subscribe(console.log);

    this.hoveredShape$.subscribe((shape: Shape) => console.log('hoveredShape:', shape));

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
    return <Observable<T[]>>this.shapeStore$
      .pipe(
        this.filterBy(((shape: T): boolean => shape.ofType(type))),
        distinctUntilChanged((a: Shape[], b: Shape[]) => equals(a, b))
      );
  }

  add = (shape: Shape): void => {
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

  public get hoveredShape(): Shape {
    return this.hoveredShape$.value;
  }
}
