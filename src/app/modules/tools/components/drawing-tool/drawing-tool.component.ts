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
      start: (shape: Shape): void => this.canvasService.add(shape),
      complete: (shape: Shape, withoutMoves: boolean): void => {
        if (withoutMoves) {
          this.socketService.send(of(shape), SocketCustomEventEnum.SAVE_SHAPE);
        } else {
          this.canvasService.remove(shape);
        }
      }
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();

    this.mouseService.listenDrags$({
      create: (pStart: Point2D): Shape => this.shapeService.createPolyline(pStart),
      start: (shape: PolylineShape): void => this.canvasService.add(shape),
      next: (shape: PolylineShape, pStart: Point2D, pCurrent: Point2D): void => {
        shape.add(pCurrent);
      },
      complete: (shape: PolylineShape): void => {
        if (shape.isCorrect()) {
          this.canvasService.setStable(shape);
          this.socketService.send(of(shape), SocketCustomEventEnum.SAVE_SHAPE);
        } else {
          this.canvasService.remove(shape);
        }
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
