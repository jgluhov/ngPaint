import { Component, OnInit, OnDestroy } from '@angular/core';
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
import { GuiService } from '@services/gui/gui.service';
import {
  ShapeStateEnum,
  ToolTypeEnum,
  SVGShapeEnum} from '@tools/enums';
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
        this.canvasService.changeState(rect.id, ShapeStateEnum.STABLE);
      }
    };
  }

  createShape(start: Point2D): Shape {
    if (this.guiService.isCurrentShape(SVGShapeEnum.Rect)) {
      return new RectShape(start.x, start.y);
    }

    if (this.guiService.isCurrentShape(SVGShapeEnum.Circle)) {
      return new CircleShape(start);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
