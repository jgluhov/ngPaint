import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { takeUntil, mergeMap } from 'rxjs/operators';
import { Subject } from 'rxjs/Subject';
import { Point2D } from '@math/point2d';
import { RectShape } from '@shapes/rect/rect';
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
        rect.transform(start, end);
      },
      complete: (): void => {

      }
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
