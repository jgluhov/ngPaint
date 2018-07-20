import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { Point2D } from '@math';
import { CanvasService } from '@services';
import { Shape } from '@shapes/shape';
import { ShapeStateEnum } from '@tools/enums';
import { empty, of, Subject, Observable } from 'rxjs';
import { switchMap, takeUntil, tap, mergeMap, finalize } from 'rxjs/operators';
import { merge } from 'rxjs/observable/merge';
import { DragHandler } from '../../shapes/shape';
import { SocketCustomEventEnum } from '../../../../../../server/events';
import { SocketService } from '../../../../services/socket/socket.service';

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

      handler.subscribe(
        shape.getDragHandler(pStart),
        null,
        () => {
          shape.setState(ShapeStateEnum.STABLE);
          this.socketService.send(of(shape), SocketCustomEventEnum.SAVE_SHAPE);
        }
      );

      return handler;
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
