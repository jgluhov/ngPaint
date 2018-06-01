import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { takeUntil, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Point2D } from '@math/point2d';
import { RectShape } from '@shapes/rect/rect';
import { of } from 'rxjs/observable/of';
import { CanvasService } from '@services/canvas/canvas.service';
import { PartialObserver } from 'rxjs/Observer';
import * as AppActions from '@store/actions/app.actions';
import { Shape } from '@shapes/shape';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@tools/types/tool';
import { Tools } from '@tools/types/tools';
import { CircleShape } from '@shapes';

@Component({
  selector: 'app-geometry-tool',
  template: ''
})
export class GeometryToolComponent implements OnInit, OnDestroy {
  private selectedTool$: Observable<Tool>;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private store: Store<AppState>,
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService
  ) { }

  ngOnInit(): void {
    this.selectedTool$ = this.store
      .select('app')
      .select('selectedTool');

    this.mouseService.onMouseDown()
      .pipe(
        withLatestFrom(this.selectedTool$),
        takeUntil(this.destroy$)
      )
      .subscribe(this.handleMouseDown);

  }

  handleMouseDown = ([start, selectedTool]: [Point2D, Tool]): void => {
    const shape: Shape = this.createShape(start, selectedTool);

    of(start)
      .pipe(
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onMouseUp())
      ).subscribe(this.rectObserver(start, shape));

    this.canvasService.render(shape);
  }

  rectObserver(start: Point2D, rect: Shape): PartialObserver<Point2D> {
    return {
      next: (end: Point2D): void => {
        rect.transform(start, end);
      },
      complete: (): void => {
        this.flushShape(rect);
      }
    };
  }

  flushShape(shape: Shape): void {
    this.canvasService.complete(shape);
    this.store.dispatch(new AppActions.CreateShape(shape));
  }

  createShape(start: Point2D, selectedTool: Tool): Shape {
    switch (selectedTool.name) {
      case Tools.Rect: {
        return new RectShape(start.x, start.y);
      }
      case Tools.Circle: {
        return new CircleShape(start);
      }
      default:
        return;
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
