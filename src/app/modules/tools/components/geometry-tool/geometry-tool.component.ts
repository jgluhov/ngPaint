import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, of, Observable } from 'rxjs';
import { tap, mergeMap, takeUntil } from 'rxjs/operators';
import { partial, bind } from 'ramda';
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
import { SocketService } from '@services/socket/socket.service';
import { SocketEventEnum } from '@enums/socket-event.enum';

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
    this.mouseService.listenDragsV2((pStart: Point2D): Subject<Point2D> => {
      const handler = new Subject<Point2D>();
      const shape = this.createShape(pStart);

      this.canvasService.add(shape);

      handler.subscribe(
        bind(partial(shape.transform, [pStart]), shape),
        null,
        partial(this.handleSuccess, [shape])
      );

      return handler;
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

  handleSuccess = (shape: Shape): void => {
    shape.setState(ShapeStateEnum.STABLE);
    this.canvasService.update();
    this.socketService.send(of(shape), SocketEventEnum.SHAPE_ADD);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
