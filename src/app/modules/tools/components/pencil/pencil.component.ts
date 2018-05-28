import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil, switchMap, mergeMap } from 'rxjs/operators';
import { ShapeService } from '@tools/services/shape/shape.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { Point2D } from '@shapes/point2d';
import { Tool } from '@tools/types/tool';
import { Shape, CircleShape, PolylineShape } from '@shapes';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import * as AppActions from '@store/actions/app.actions';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  tool: Tool;
  selectedColor: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private store: Store<AppState>,
    private mouseTracker: MouseTrackerDirective,
    private shapeService: ShapeService
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
        takeUntil(this.mouseTracker.onMouseUp())
      )
      .subscribe(
        (pt: Point2D) => {
          if (!polyline.rendered) {
            this.shapeService.render(polyline);
          }
          polyline.points.push(pt);
        },
        null,
        () => {
          if (polyline.points.length > 1) {
            console.warn('CREATE POLYLINE');
          }
        }
      );

    console.warn('CREATE CIRCLE');
    this.shapeService.render(circle);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
