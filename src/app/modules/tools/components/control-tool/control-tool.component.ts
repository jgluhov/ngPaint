import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { Subject } from 'rxjs/Subject';
import { takeUntil, mergeMap, withLatestFrom, map, tap } from 'rxjs/operators';
import { Point2D } from '@math/point2d';
import { CanvasService } from '@services/canvas/canvas.service';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Shape } from '@tools';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { App } from '@store/reducers/app.reducer';
import { PartialObserver } from 'rxjs/Observer';

@Component({
  selector: 'app-control-tool',
  template: ``
})
export class ControlToolComponent implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();
  private hoveredShape$: Observable<Shape>;

  constructor(
    private store: Store<AppState>,
    private canvasService: CanvasService,
    private mouseService: MouseServiceDirective
  ) { }

  ngOnInit(): void {
    this.hoveredShape$ = this.store.select('app')
      .pipe(
        map((app: App) => app.hoveredShape)
      );

    this.mouseService.onMouseDown()
      .pipe(
        withLatestFrom(this.hoveredShape$),
        tap(([start, hoveredShape]: [Point2D, Shape]) => {
          console.log(hoveredShape);
        }),
        takeUntil(this.destroy$)
      )
      .subscribe(this.handleMouseDown);
  }

  handleMouseDown = ([start, hoveredShape]: [Point2D, Shape]): void => {
    of(start)
      .pipe(
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onMouseUp())
      )
      .subscribe(this.handleDrag(start, hoveredShape));
  }

  handleDrag = (start: Point2D, shape: Shape): PartialObserver<Point2D> => {
    shape.editing = true;

    return {
      next: (end: Point2D): void => {
        console.log(end);
      },
      complete: (): void => {
        shape.editing = false;
      }
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
