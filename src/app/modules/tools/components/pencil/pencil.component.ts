import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { ShapeService } from '@tools/services/shape/shape.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Input
} from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { Point2D } from '@tools/shapes/point2d';
import { Tool } from '@tools/tools';
import { PolylineShape } from '../../shapes/polyline-shape';

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
    const polyline = <PolylineShape>new this.tool.constructor();

    this.mouseTracker.trackMouse(evt)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (p: Point2D): void => {
          polyline.points = polyline.points.concat(p);
        },
        complete: (): void => {}
      });

    this.shapeService.add(polyline);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
