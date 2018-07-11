import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { Point2D } from '@math';
import { CanvasService } from '@services';
import { Shape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';
import { empty, of, Subject, Observable } from 'rxjs';
import { switchMap, takeUntil, tap, mergeMap, finalize } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';

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
    this.mouseService.onMouseDown()
      .pipe(
        switchMap((start: Point2D) => this.canvasService.hoveredShape ? of(start) : empty()),
        mergeMap((start: Point2D) => {
          const hoveredShape = this.canvasService.hoveredShape;

          this.canvasService.setState(hoveredShape.id, ShapeStateEnum.DRAGGING);
          const dragHandler = hoveredShape.createDragHandler(start);

          return this.mouseService.onMouseMove()
            .pipe(
              tap((point: Point2D) => dragHandler(point)),
              takeUntil(this.mouseService.onEnd()),
              finalize(() =>
                this.canvasService.setState(hoveredShape.id, ShapeStateEnum.STABLE)
              )
            );
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
