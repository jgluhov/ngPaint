import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { takeUntil, mergeMap, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Point2D } from '../../shapes/point2d';
import { RectShape, BoundingRect } from '@shapes/rect';
import { of } from 'rxjs/observable/of';
import { CanvasService } from '../../../../services/canvas/canvas.service';
import { PartialObserver } from 'rxjs/Observer';

@Component({
  selector: 'app-geometry-tool',
  template: ''
})
export class GeometryToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService
  ) { }

  ngOnInit(): void {

    this.mouseService.onMouseDown()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(this.handleMouseDown);

  }

  handleMouseDown = (start: Point2D): void => {
    const rect = new RectShape(start);

    of(start)
      .pipe(
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onMouseUp())
      ).subscribe(this.rectObserver(start, rect));

    this.canvasService.render(rect);
  }

  rectObserver(start: Point2D, rect: RectShape): PartialObserver<Point2D> {
    return {
      next: (end: Point2D): void => {
        const boundingRect = this.getBoundingRect(start, end);
        rect.transform(boundingRect);
      },
      complete: (): void => {

      }
    };
  }

  getBoundingRect(start: Point2D, end: Point2D): BoundingRect {
    if (start.x <= end.x && start.y <= end.y) {
      return {
        x: start.x,
        y: start.y,
        width: end.x - start.x,
        height: end.y - start.y
      };
    }

    if (start.x <= end.x && start.y > end.y) {
      return {
        x: start.x,
        y: end.y,
        width: end.x - start.x,
        height: start.y - end.y
      };
    }

    if (start.x >= end.x && start.y > end.y) {
      return {
        x: end.x,
        y: end.y,
        width: start.x - end.x,
        height: start.y - end.y
      };
    }

    if (start.x >= end.x && start.y <= end.y) {
      return {
        x: end.x,
        y: start.y,
        width: start.x - end.x,
        height: end.y - start.y
      };
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
