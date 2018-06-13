import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  takeUntil,
  mergeMap,
  withLatestFrom,
  map,
  Subject,
  of,
  PartialObserver,
  Observable
} from '@rx';
import { Point2D } from '@math';
import {
  Shape,
  RectShape,
  CircleShape
} from '@shapes';
import { MouseServiceDirective } from '@directives';
import { CanvasService } from '@services';
import { Tool, ToolTypes } from '@tools/types';
import { App, AppActions, AppState } from '@store';
import { ShapeStates } from '../../types/shape-states';
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
      .pipe(map((app: App) => app.selectedTool));

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

    this.canvasService.add(shape);
  }

  rectObserver(start: Point2D, rect: Shape): PartialObserver<Point2D> {
    return {
      next: (end: Point2D): void => {
        rect.transform(start, end);
      },
      complete: (): void => {
        this.canvasService.changeState(rect.id, ShapeStates.STABLE);
        this.store.dispatch(new AppActions.CreateShape(rect));
      }
    };
  }

  createShape(start: Point2D, selectedTool: Tool): Shape {
    switch (selectedTool.shape) {
      case ToolTypes.Rect: {
        return new RectShape(start.x, start.y);
      }
      case ToolTypes.Circle: {
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
