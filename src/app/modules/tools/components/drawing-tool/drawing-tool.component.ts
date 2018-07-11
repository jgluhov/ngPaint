import { Component, OnInit, OnDestroy } from '@angular/core';
import { Point2D } from '@math';
import * as R from 'ramda';
import { CircleShape, PolylineShape, Shape } from '@shapes';
import { MouseServiceDirective } from '@directives';
import { CanvasService, GuiService } from '@services';
import { ShapeStateEnum } from '@tools/enums/shape-state.enum';
import { Subject } from 'rxjs/Subject';
import { takeUntil, tap, mergeMap, switchMap, buffer, reduce, toArray, filter, mapTo, finalize, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable, concat } from 'rxjs';

@Component({
  selector: 'app-drawing-tool',
  template: ''
})
export class DrawingToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private drags$;
  private drops$;

  constructor(
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService,
    private guiService: GuiService
  ) {}

  ngOnInit(): void {
    this.drags$ = this.mouseService.starts$
      .pipe(
        switchMap((start: Point2D) => {
          const polyline = this.createPolyline([start]);

          return this.mouseService.moves$
            .pipe(
              tap(this.canvasService.addOnce(polyline)),
              tap(polyline.append),
              finalize(() => {
                this.canvasService.changeState(polyline.id, ShapeStateEnum.STABLE);
              }),
              takeUntil(this.mouseService.ends$)
            );
        })
      );

    this.drops$ = this.mouseService.starts$
      .pipe(
        switchMap((start: Point2D) => {
          const circle = this.createCircle(start);

          return this.mouseService.wasMoving$
            .pipe(
              filter(R.not),
              tap(() => {
                this.canvasService.add(circle);
                this.canvasService.changeState(circle.id, ShapeStateEnum.STABLE);
              })
            );
        })
      );

    this.drops$.subscribe();
    this.drags$.subscribe();
  }

  createPolyline(points: Point2D[]): PolylineShape {
    return new PolylineShape(
      points,
      this.guiService.currentStrokeWidth,
      this.guiService.currentStroke
    );
  }

  createCircle(center: Point2D): CircleShape {
    return new CircleShape(
      center,
      this.guiService.currentStroke,
      this.guiService.currentStrokeWidth,
      this.guiService.currentStroke
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
