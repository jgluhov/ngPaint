import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { Point2D } from '@math';
import { CanvasService } from '@services';
import { Shape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';
import { empty, of, Subject, Observable } from 'rxjs';
import { switchMap, takeUntil, tap, mergeMap, finalize } from 'rxjs/operators';
import { map } from '@rx';
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
        tap(() => {
          this.canvasService.changeState(
            this.canvasService.hoveredShape.id,
            ShapeStateEnum.DRAGGING
          );
        }),
        mergeMap((start: Point2D) => {

          const xStartX = start.x - this.canvasService.hoveredShape.x;
          const yStartY = start.y - this.canvasService.hoveredShape.y;

          return this.mouseService.onMouseMove()
            .pipe(
              map((end: Point2D) => new Point2D(end.x - xStartX, end.y - yStartY)),
              takeUntil(this.mouseService.onEnd()),
              finalize(() => {
                this.canvasService.changeState(
                  this.canvasService.hoveredShape.id,
                  ShapeStateEnum.STABLE
                );
              })
            );
        }),
        tap((position: Point2D) => this.canvasService.hoveredShape.moveTo(position)),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
