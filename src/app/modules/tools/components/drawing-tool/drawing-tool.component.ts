import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Point2D } from '@math';
import { Shape, CircleShape, PolylineShape } from '@shapes';
import { App, AppState, AppActions } from '@store';
import { CanvasService } from '@services';
import { MouseServiceDirective } from '@directives';
import {
  Observable,
  fromEvent,
  Subject,
  takeUntil,
  mergeMap,
  withLatestFrom,
  map,
  of,
  PartialObserver
} from '@rx';
import { ShapeStates } from '@tools/types/shape-states';

@Component({
  selector: 'app-drawing-tool',
  template: ''
})
export class DrawingToolComponent implements OnInit, OnDestroy {
  private selectedColor$: Observable<string>;
  private thickness$: Observable<number>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private store: Store<AppState>,
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService
  ) {}

  ngOnInit(): void {
    this.selectedColor$ = this.store
      .select('app')
      .pipe(map((app: App) => app.selectedColor));

    this.thickness$ = this.store
      .select('app')
      .pipe(map((app: App) => app.thickness));

    this.mouseService.onMouseDown()
      .pipe(
        withLatestFrom(this.thickness$, this.selectedColor$),
        takeUntil(this.destroy$)
      )
      .subscribe(this.handleMouseDown);
  }

  handleMouseDown = (
    [p, thickness, selectedColor]: [Point2D, number, string]
  ): void => {
    const circle = new CircleShape(p, thickness / 2, selectedColor);
    const polyline = new PolylineShape([p], thickness, selectedColor);

    Shape.relate(polyline, circle);

    of(p)
      .pipe(
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onEnd()),
        withLatestFrom(this.canvasService.canvasShapes$)
      )
      .subscribe(this.polylineObserver(polyline));

    this.canvasService.add(circle);
    this.canvasService.changeState(circle.id, ShapeStates.STABLE);
    this.store.dispatch(new AppActions.CreateShape(circle));
  }

  polylineObserver(polyline: PolylineShape): PartialObserver<[Point2D, Shape[]]> {
    return {
      next: ([pt, canvasShapes]: [Point2D, Shape[]]): void => {
        if (!canvasShapes.includes(polyline)) {
          this.canvasService.add(polyline);
        }
        polyline.append(pt);
      },
      complete: (): void => {
        if (!this.shouldBeCreated(polyline)) {
          return;
        }

        this.canvasService.changeState(polyline.id, ShapeStates.STABLE);
        this.store.dispatch(new AppActions.CreateShape(polyline));
      }
    };
  }

  shouldBeCreated(shape: PolylineShape): boolean {
    return shape.length() > 1;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
