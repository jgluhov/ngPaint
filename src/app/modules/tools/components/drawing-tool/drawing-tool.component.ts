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
        map(this.shapeService.createCircle),
        switchMap((circle: CircleShape) => {
          this.canvasService.add(circle, true);

          return this.mouseService.withMoves$
            .pipe(tap(() => this.canvasService.remove(circle)));
          }
        ),
        takeUntil(this.destroy$)
      );

    this.drags$ = this.mouseService.starts$
      .pipe(
        map(this.shapeService.createPolyline),
        switchMap((polyline: PolylineShape) => {
          this.canvasService.add(polyline);

          return this.mouseService.moves$
            .pipe(
              tap(polyline.add),
              finalize(() => {
                polyline.isCorrect() ?
                  this.canvasService.setStable(polyline) :
                  this.canvasService.remove(polyline);
              }),
              takeUntil(this.mouseService.ends$)
            );
          }
        ),
        takeUntil(this.destroy$)
      );

    this.drags$.subscribe();
    this.drops$.subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
