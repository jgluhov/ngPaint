import { Component, OnInit, OnDestroy } from '@angular/core';
import { Point2D } from '@math';
import * as R from 'ramda';
import { PolylineShape } from '@shapes/polyline/polyline-shape';
import { Shape } from '@shapes/shape';
import { CircleShape } from '@shapes/circle/circle-shape';
import { MouseServiceDirective } from '@directives';
import { CanvasService, GuiService } from '@services';
import { Subject } from 'rxjs/Subject';
import { takeUntil, switchMap, map, take, finalize, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ShapeService } from '@services/shape/shape.service';
import { SocketCustomEventEnum } from '@server/events';
import { SocketService } from '@services/socket/socket.service';
import { ShapeStateEnum } from '@tools/enums';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-drawing-tool',
  template: ''
})
export class DrawingToolComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  constructor(
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService,
    private guiService: GuiService,
    private shapeService: ShapeService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {

    this.mouseService.listenDropsV2((pStart: Point2D): Subject<Point2D> => {
      const handler = new Subject<Point2D>();
      const circle = this.shapeService.createCircle(pStart, true)
        .setState(ShapeStateEnum.STABLE)
        .seal();

      this.canvasService.add(circle);

      handler.subscribe(
        () => this.handleSuccess(circle),
        () => this.handleFailed(circle)
      );

      return handler;
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();

    this.mouseService.listenDragsV2((pStart: Point2D): Subject<Point2D> => {
      const handler = new Subject<Point2D>();
      const polyline = this.shapeService.createPolyline(pStart).seal();

      this.canvasService.add(polyline);

      handler.subscribe(
        (point: Point2D) => polyline.addPoint(point),
        null,
        () => {
          polyline.isCorrect() ?
            this.handleSuccess(polyline) : this.handleFailed(polyline);
        }
      );

      return handler;
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();
  }

  handleSuccess(shape: Shape): void {
    shape.setState(ShapeStateEnum.STABLE);
    this.socketService.send(of(shape), SocketCustomEventEnum.SAVE_SHAPE);
  }

  handleFailed(shape: Shape): void {
    this.canvasService.remove(shape);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
