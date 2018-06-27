import { Component, OnInit, OnDestroy } from '@angular/core';
import { Point2D } from '@math';
import { last } from 'ramda';
import { Shape, CircleShape, PolylineShape } from '@shapes';
import { MouseServiceDirective } from '@directives';
import { CanvasService, GuiService } from '@services';
import { ShapeStateEnum } from '@tools/enums/shape-state.enum';
import { Subject } from 'rxjs/Subject';
import { takeUntil, tap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-drawing-tool',
  template: ''
})
export class DrawingToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService,
    private guiService: GuiService
  ) {}

  ngOnInit(): void {
    this.mouseService.onMouseDown()
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.handlePress);
  }

  handlePress = (start: Point2D): void => {
    const polyline = this.createPolyline(start);
    const circle = this.createCircle(start);
    this.drawCircle(circle);

    const drawing$ = of(start)
      .pipe(
        tap(() => this.canvasService.add(polyline)),
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onEnd())
      );

    drawing$.subscribe(
      (point: Point2D) => polyline.append(point),
      null,
      () => {
        if (polyline.isCorrect()) {
          this.canvasService.remove(circle.id);
          this.canvasService.changeState(polyline.id, ShapeStateEnum.STABLE);
        } else {
          this.canvasService.remove(polyline.id);
        }
      }
    );
  }

  createPolyline(start: Point2D): PolylineShape {
    return new PolylineShape(
      start,
      this.guiService.currentThickness,
      this.guiService.currentColor
    );
  }

  createCircle(start: Point2D): CircleShape {
    return new CircleShape(
      start,
      this.guiService.currentThickness / 3,
      this.guiService.currentThickness / 2,
      this.guiService.currentColor
    );
  }

  drawCircle(circle: CircleShape): void {
    this.canvasService.add(circle);
    this.canvasService.changeState(circle.id, ShapeStateEnum.STABLE);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
