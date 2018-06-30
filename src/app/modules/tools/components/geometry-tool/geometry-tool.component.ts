import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, of, PartialObserver, Observable } from 'rxjs';
import { tap, mergeMap, takeUntil } from 'rxjs/operators';
import { Point2D } from '@math';
import { Shape, RectShape, CircleShape } from '@shapes';
import { MouseServiceDirective } from '@directives';
import { CanvasService, GuiService } from '@services';
import {
  ShapeStateEnum,
  ToolTypeEnum,
  SVGShapeEnum
} from '@tools/enums';
import { IToolList, IToolListItem } from '@tools/interfaces';

@Component({
  selector: 'app-geometry-tool',
  template: ''
})
export class GeometryToolComponent implements OnInit, OnDestroy {
  private selectedTool$: Observable<IToolListItem>;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService,
    private guiService: GuiService
  ) { }

  ngOnInit(): void {
    this.mouseService.onMouseDown()
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.handleMouseDown);
  }

  handleMouseDown = (start: Point2D): void => {
    const shape: Shape = this.createShape(start);

    const drawing$ = of(start)
      .pipe(
        tap(() => this.canvasService.add(shape)),
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onEnd())
      );

    drawing$.subscribe(
      (point: Point2D) => shape.transform(start, point),
      null,
      () => this.canvasService.changeState(shape.id, ShapeStateEnum.STABLE));
  }

  createShape(center: Point2D): Shape {
    if (this.guiService.isCurrentShape(SVGShapeEnum.Rect)) {
      return new RectShape(
        center,
        this.guiService.currentStroke,
        this.guiService.currentStrokeWidth
      );
    }

    if (this.guiService.isCurrentShape(SVGShapeEnum.Circle)) {
      return new CircleShape(
        center,
        this.guiService.currentStroke,
        this.guiService.currentStrokeWidth,
        this.guiService.currentStroke
      );
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
