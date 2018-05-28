import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { Point2D } from '@shapes/point2d';
import { Tool } from '@tools/types/tool';
import { PolylineShape } from '@shapes/polyline-shape';
import { Shape } from '@shapes/shape';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import * as AppActions from '@store/actions/app.actions';
import { CanvasService } from '@services/canvas/canvas.service';

@Component({
  selector: 'app-brush',
  template: ``
})
export class BrushComponent implements OnInit, OnDestroy {
  tool: Tool;
  selectedColor: string;
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private store: Store<AppState>,
    private mouseTracker: MouseTrackerDirective,
    private canvasService: CanvasService
  ) {}

  ngOnInit(): void {
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

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
