import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { Point2D } from '@math';
import { CanvasService } from '@services';
import { Shape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';
import { empty, of, Subject, Observable } from 'rxjs';
import { switchMap, takeUntil, tap, mergeMap, finalize } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { DragHandler } from '../../shapes/shape';

@Component({
  selector: 'app-control-tool',
  template: ``
})
export class ControlToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private hoveredShape$: Observable<Shape>;

  constructor(
    private canvasService: CanvasService,
    private mouseService: MouseServiceDirective
  ) { }

  ngOnInit(): void {
    this.mouseService.listenDrags$({
      create: (): Shape => this.canvasService.hoveredShape,
      start: (shape: Shape, point: Point2D): DragHandler => {
        this.canvasService.setDragging(shape);

        return shape.createDragHandler(point);
      },
      next: (shape: Shape, pStart: Point2D, pCurrent: Point2D, handler: DragHandler): void => {
        handler(pCurrent);
      },
      complete: (shape: Shape): void => {
        this.canvasService.setStable(shape);
      }
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
