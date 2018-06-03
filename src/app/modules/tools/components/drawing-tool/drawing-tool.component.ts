import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil, mergeMap, withLatestFrom, map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Point2D } from '@math/point2d';
import { Shape, CircleShape, PolylineShape } from '@shapes';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { of } from 'rxjs/observable/of';
import { CanvasService } from '@services/canvas/canvas.service';
import { PartialObserver } from 'rxjs/Observer';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import * as AppActions from '@store/actions/app.actions';
import { App } from '@store/reducers/app.reducer';

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

    of(p)
      .pipe(
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onEnd()),
        withLatestFrom(this.canvasService.canvasShapes$)
      )
      .subscribe(this.polylineObserver(polyline));

    this.canvasService.add(circle);
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
        if (!this.shouldPolylineCreate(polyline)) {
          return;
        }

        this.store.dispatch(new AppActions.CreateShape(polyline));
      }
    };
  }

  shouldPolylineCreate(polyline: PolylineShape): boolean {
    return polyline.length() > 1;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
