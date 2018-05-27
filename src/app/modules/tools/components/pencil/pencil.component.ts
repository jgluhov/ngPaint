import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { ShapeService } from '@tools/services/shape/shape.service';
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { Point2D } from '@shapes/point2d';
import { Tool } from '@tools/tools';
import { PolylineShape } from '@shapes/polyline-shape';
import { Shape } from '@shapes/shape';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  @Input() tool;
  @Output() createShape: EventEmitter<Shape> = new EventEmitter<Shape>();
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private mouseTracker: MouseTrackerDirective,
    private shapeService: ShapeService
  ) {}

  ngOnInit(): void {
    this.mouseTracker.onStart()
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.onStart.bind(this));
  }

  onStart(evt: MouseEvent): void {
    const polyline = <PolylineShape>new this.tool.constructor();

    this.mouseTracker.trackMouse(evt)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (p: Point2D): void => {
          polyline.points.push(p);
        },
        complete: (): void => {
          this.createShape.emit(polyline);
        }
      });

    this.shapeService.add(polyline);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
