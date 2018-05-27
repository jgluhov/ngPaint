import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { ShapeService } from '@tools/services/shape/shape.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { Point2D } from '@shapes/point2d';
import { Tool } from '@tools/types/tool';
import { Shape, CircleShape, PolylineShape } from '@shapes';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import * as AppActions from '@store/actions/app.actions';

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
    this.mouseTracker.onStart()
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.onStart.bind(this));

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

  onStart(evt: MouseEvent): void {
    const shape = new PolylineShape([], this.selectedColor, 1);

    this.mouseTracker.trackMouse(evt)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (p: Point2D): void => {
          shape.points.push(p);
        },
        complete: (): void => {
          this.handleTransformShape(shape);
        }
      });

    this.shapeService.add(shape);
  }

  handleTransformShape(shape: Shape): void {
    if (shape.points.length > 1) {
      this.store.dispatch(new AppActions.CreateShape(shape));
    }

    const point: Point2D = shape.points[0];
    const circle = new CircleShape(point.x, point.y);
    this.store.dispatch(new AppActions.CreateShape(circle));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
