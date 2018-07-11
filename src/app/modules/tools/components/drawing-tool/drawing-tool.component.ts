import { Component, OnInit, OnDestroy } from '@angular/core';
import { Point2D } from '@math';
import * as R from 'ramda';
import { PolylineShape, Shape } from '@shapes';
import { MouseServiceDirective } from '@directives';
import { CanvasService, GuiService } from '@services';
import { Subject } from 'rxjs/Subject';
import { takeUntil, switchMap, mapTo, map, take, skip, finalize } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable, concat } from 'rxjs';
import { ShapeService } from '@services/shape/shape.service';

interface DragsObserver<T> {
  shape: T;
  point: Point2D;
}

@Component({
  selector: 'app-drawing-tool',
  template: ''
})
export class DrawingToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private finish$: Observable<Point2D> = of(new Point2D(-1, -1));
  private drags$;
  private drops$;

  constructor(
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService,
    private guiService: GuiService,
    private shapeService: ShapeService
  ) {}

  ngOnInit(): void {
    this.drops$ = this.mouseService.starts$
      .pipe(
        map((point: Point2D) => this.shapeService.createCircle(point)),
        switchMap((shape: Shape) => this.mouseService.withoutMoves$.pipe(mapTo(shape)))
      );

    this.drags$ = this.mouseService.starts$
      .pipe(
        map((point: Point2D) => this.shapeService.createPolyline(point)),
        switchMap((shape: Shape) => {
          return this.mouseService.moves$
            .pipe(
              map((point: Point2D) => ({shape, point})),
              takeUntil(this.mouseService.ends$),
              finalize(() => this.canvasService.setStable(shape))
            );
        })
      );

    this.drags$.subscribe(this.handleDrags);
    this.drops$.subscribe(this.handleDrops);
  }

  handleDrops = (shape: Shape): void => {
    this.canvasService.add(shape, true);
  }

  handleDrags = ({shape, point}: {shape: PolylineShape; point: Point2D}): void => {
    if (!shape.isRendered()) {
      this.canvasService.add(shape, false);
    }

    shape.append(point);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
