import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';
import { Point2D } from '@math/point2d';
import { CanvasService } from '@services/canvas/canvas.service';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-control-tool',
  template: ``
})
export class ControlToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private canvasService: CanvasService,
    private mouseService: MouseServiceDirective
  ) { }

  ngOnInit(): void {
    this.mouseService.onMouseDown()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(this.handleMouseDown);
  }

  handleMouseDown = (p: Point2D): void => {
    of(p)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
