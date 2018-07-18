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
    this.mouseService.listenDrops$({
      create: this.shapeService.createCircle,
      start: (shape: Shape, point: Point2D): void => {
        shape.setState(ShapeStateEnum.STABLE);
        this.canvasService.add(shape);
      },
      complete: (shape: Shape, withoutMoves: boolean): void => {
        withoutMoves ?
          this.handleSuccess(shape) : this.handleFailed(shape);
      }
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();

    this.mouseService.listenDrags$({
      create: this.shapeService.createPolyline,
      start:  (shape: Shape, point: Point2D): void => this.canvasService.add(shape),
      next: (shape: PolylineShape, pStart: Point2D, pCurrent: Point2D): void => {
        shape.addPoint(pCurrent);
      },
      complete: (shape: PolylineShape): void => {
        shape.isCorrect() ?
          this.handleSuccess(shape) : this.handleFailed(shape);
      }
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();
  }

  handleSuccess(shape: Shape): void {
    shape.done();
    this.canvasService.update();
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
