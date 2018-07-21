import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { Point2D } from '@math';
import { CanvasService } from '@services';
import { Shape } from '@shapes/shape';
import { partial, bind } from 'ramda';
import { ShapeStateEnum } from '@tools/enums';
import { of, Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { SocketService } from '@services/socket/socket.service';
import { SocketEventEnum } from '@enums/socket-event.enum';

@Component({
  selector: 'app-control-tool',
  template: ``
})
export class ControlToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private hoveredShape$: Observable<Shape>;

  constructor(
    private canvasService: CanvasService,
    private mouseService: MouseServiceDirective,
    private socketService: SocketService
  ) { }

  ngOnInit(): void {
    this.mouseService.listenDragsV2((pStart: Point2D): Subject<Point2D> => {
      const handler = new Subject<Point2D>();
      const shape = this.canvasService.hoveredShape;

      if (!shape) {
        handler.complete();

        return handler;
      }

      shape.setState(ShapeStateEnum.DRAGGING);
      const dragHandler = shape.getDragHandler(pStart);

      handler.subscribe(
        bind(dragHandler, shape),
        null,
        partial(this.handleSuccess, [shape])
      );

      return handler;
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();
  }

  handleSuccess = (shape: Shape): void => {
    shape.setState(ShapeStateEnum.STABLE);
    this.socketService.send(of(shape), SocketEventEnum.SHAPE_CHANGE);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
