import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { Tool } from '@models';
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
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private mouseTracker: MouseTrackerDirective
  ) {}

  ngOnInit(): void {
    this.mouseTracker.mousedown$
      .subscribe(this.onStart);
  }

  onStart = (evt: MouseEvent): void => {
    this.mouseTracker.trackMouse(evt)
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
  }
}
