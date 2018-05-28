import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil, switchMap, mergeMap, withLatestFrom } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { Point2D } from '@shapes/point2d';
import { Tool } from '@tools/types/tool';
import { Shape, CircleShape, PolylineShape } from '@shapes';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import * as AppActions from '@store/actions/app.actions';
import { of } from 'rxjs/observable/of';
import { CanvasService } from '@services/canvas/canvas.service';
import { PartialObserver } from 'rxjs/Observer';

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
    private mouseTracker: MouseTrackerDirective,
    private canvasService: CanvasService
  ) {}

  ngOnInit(): void {
    this.mouseTracker.onMouseDown()
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
        mergeMap(() => this.mouseTracker.onMouseMove()),
        takeUntil(this.mouseTracker.onMouseUp()),
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
        console.warn('CREATE POLYLINE');
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
