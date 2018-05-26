import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { ShapeService } from '@services/shape/shape.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { Point2D } from '@tools/shapes/point2d';
import { Tool } from '@tools/tools';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  @Input() tool;
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
    const polyline = new this.tool.createShape();

    this.mouseTracker.trackMouse(evt)
      .pipe(takeUntil(this.destroy$))
      .subscribe((p: Point2D) => {
        console.log(p);
      });

    this.mouseTracker.bufferMouse(evt)
      .pipe(takeUntil(this.destroy$))
      .subscribe((points: Point2D[]) => {
        console.log(points);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
