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
  Host
} from '@angular/core';
import { MouseService } from '@services/mouse/mouse.service';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Host() private mouseService: MouseService
  ) {}

  ngOnInit(): void {
    this.mouseService.fromEvent('mousedown')
      .pipe(takeUntil(this.destroy$))
      .subscribe(this.onStart);
  }

  onStart = (evt: MouseEvent): void => {
    this.mouseService.trackMouse(evt)
      .pipe(takeUntil(this.destroy$))
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
