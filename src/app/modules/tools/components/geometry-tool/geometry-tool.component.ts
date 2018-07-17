import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
import { tap, mergeMap, takeUntil } from 'rxjs/operators';
import { Point2D } from '@math';
import { Shape } from '@shapes/shape';
import { RectShape } from '@shapes/rect/rect-shape';
import { CircleShape } from '@shapes/circle/circle-shape';
import { MouseServiceDirective } from '@directives';
import { CanvasService, GuiService } from '@services';
import {
  ShapeStateEnum,
  ToolTypeEnum,
  SVGShapeEnum
} from '@tools/enums';
import { IToolList, IToolListItem } from '@tools/interfaces';
import { ShapeService } from '@services/shape/shape.service';
import { SocketService } from '../../../../services/socket/socket.service';
import { SocketCustomEventEnum } from '@server/events';

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
    private guiService: GuiService,
    private shapeService: ShapeService,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.mouseService.listenDrags$({
      create: (pStart: Point2D): Shape => this.createShape(pStart),
      start: (shape: Shape): void => this.canvasService.add(shape),
      next: (shape: Shape, pStart: Point2D, pCurrent: Point2D): void => {
        shape.transform(pStart, pCurrent);
      },
      complete: (shape: Shape): void => {
        this.canvasService.setStable(shape);
        this.socketService.send(of(shape), SocketCustomEventEnum.SAVE_SHAPE);
      }
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();
  }

  createShape(point: Point2D): Shape {
    if (this.guiService.isCurrentShape(SVGShapeEnum.Rect)) {
      return this.shapeService.createRect(point);
    }

    if (this.guiService.isCurrentShape(SVGShapeEnum.Circle)) {
      return this.shapeService.createCircle(point);
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
