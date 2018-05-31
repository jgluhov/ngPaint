import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil, mergeMap, withLatestFrom } from 'rxjs/operators';
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
      .select('selectedColor');

    this.thickness$ = this.store
      .select('app')
      .select('thickness');

    this.mouseService.onMouseDown()
      .pipe(
        withLatestFrom(this.thickness$, this.selectedColor$),
        takeUntil(this.destroy$)
      )
      .subscribe(this.handleMouseDown);
  }

  handleMouseDown = ([p, thickness, selectedColor]: [Point2D, number, string]): void => {
    const circle = new CircleShape(p.x, p.y, thickness, selectedColor);
    const polyline = new PolylineShape([p], thickness * 2, selectedColor);

    of(p)
      .pipe(
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onEnd()),
        withLatestFrom(this.canvasService.canvasShapes$)
      )
      .subscribe(this.polylineObserver(polyline));

    this.canvasService.render(circle);
    this.flushShape(circle);
  }

  polylineObserver(polyline: PolylineShape): PartialObserver<[Point2D, Shape[]]> {
    return {
      next: ([pt, canvasShapes]: [Point2D, Shape[]]): void => {
        if (!canvasShapes.includes(polyline)) {
          this.canvasService.render(polyline);
        }
        polyline.append(pt);
      },
      complete: (): void => {
        if (!this.shouldPolylineCreate(polyline)) {
          return;
        }
        this.flushShape(polyline);
      }
    };
  }

  flushShape(shape: Shape): void {
    this.canvasService.complete(shape);
    this.store.dispatch(new AppActions.CreateShape(shape));
  }

  shouldPolylineCreate(polyline: PolylineShape): boolean {
    return polyline.length() > 1;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
