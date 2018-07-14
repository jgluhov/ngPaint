import { Component, OnInit, OnDestroy } from '@angular/core';
import { Point2D } from '@math';
import * as R from 'ramda';
import { PolylineShape, Shape, CircleShape } from '@shapes';
import { MouseServiceDirective } from '@directives';
import { CanvasService, GuiService } from '@services';
import { Subject } from 'rxjs/Subject';
import { takeUntil, switchMap, map, take, finalize, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { ShapeService } from '@services/shape/shape.service';

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
    private shapeService: ShapeService
  ) {}

  ngOnInit(): void {
    this.mouseService.listenDrops$({
      create: this.shapeService.createCircle,
      start: (shape: CircleShape): void => this.canvasService.add(shape, true),
      complete: (shape: Shape, withMoves: boolean): void => {
        if (withMoves) {
          this.canvasService.remove(shape);
        }
      }
    })
    .pipe(takeUntil(this.destroy$))
    .subscribe();

    this.mouseService.listenDrags$({
      create: (point: Point2D): Shape => this.shapeService.createPolyline(point),
      start: (shape: Shape): void => this.canvasService.add(shape),
      next: (shape: PolylineShape, point: Point2D): void => shape.add(point),
      complete: (shape: PolylineShape): void => {
        shape.isCorrect() ?
          this.canvasService.setStable(shape) :
          this.canvasService.remove(shape);
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
