import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { Tool } from '@tools/tools';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  ViewContainerRef,
  Host,
  Optional
} from '@angular/core';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  private complete$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private mouseTracker: MouseTrackerDirective
  ) {}

  ngOnInit(): void {
    this.mouseTracker.onStart()
      .subscribe(this.onStart.bind(this));
  }

  onStart(evt: MouseEvent): void {
    this.mouseTracker.trackMouse(evt)
      .subscribe((p: SVGPoint) => {
        console.log(p);
      });

    this.mouseTracker.bufferMouse(evt)
      .subscribe((points: SVGPoint[]) => {
        console.log(points);
      });
  }

  ngOnDestroy(): void {
  }
}
