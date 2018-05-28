import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil, mergeMap, withLatestFrom, tap } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Point2D } from '@shapes/point2d';
import { Tool } from '@tools/types/tool';
import { Shape, CircleShape, PolylineShape } from '@shapes';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { of } from 'rxjs/observable/of';
import { CanvasService } from '@services/canvas/canvas.service';
import { PartialObserver } from 'rxjs/Observer';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';

@Component({
  selector: 'app-drawing-tool',
  template: ''
})
export class DrawingToolComponent implements OnInit, OnDestroy {
  tool: Tool;
  selectedColor: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private store: Store<AppState>,
    private mouseService: MouseServiceDirective,
    private canvasService: CanvasService
  ) {}

  ngOnInit(): void {
    this.mouseService.onMouseDown()
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.handleMouseDown);

    this.store
      .select('app')
      .select('tool')
      .pipe(takeUntil(this.destroy$))
      .subscribe((tool: Tool) => this.tool = tool);

    this.store
      .select('app')
      .select('color')
      .pipe(takeUntil(this.destroy$))
      .subscribe((color: string) => this.selectedColor = color);
  }

  handleMouseDown = (p: Point2D): void => {
    const circle = new CircleShape(p);
    const polyline = new PolylineShape([p]);

    of(p)
      .pipe(
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onMouseUp()),
        withLatestFrom(this.canvasService.canvasShapes$)
      )
      .subscribe(this.polylineObserver(polyline));

    this.canvasService.add(circle);
  }

  polylineObserver(polyline: PolylineShape): PartialObserver<[Point2D, Shape[]]> {
    return {
      next: ([pt, canvasShapes]: [Point2D, Shape[]]): void => {
        if (!canvasShapes.includes(polyline)) {
          this.canvasService.add(polyline);
        }
        polyline.points.push(pt);
      },
      complete: (): void => {
        if (!this.shouldPolylineCreate(polyline)) {
          return;
        }
      }
    };
  }

  shouldPolylineCreate(polyline: PolylineShape): boolean {
    return polyline.points.length > 1;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
