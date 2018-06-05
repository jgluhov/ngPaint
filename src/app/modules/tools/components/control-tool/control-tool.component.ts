import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { Subject } from 'rxjs/Subject';
import { takeUntil, mergeMap, withLatestFrom, map, tap, filter } from 'rxjs/operators';
import { Point2D } from '@math/point2d';
import { CanvasService } from '@services/canvas/canvas.service';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Shape } from '@tools';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { App } from '@store/reducers/app.reducer';
import { PartialObserver } from 'rxjs/Observer';
import * as AppActions from '@store/actions/app.actions';

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
        filter(([start, hoveredShape]: [Point2D, Shape]) => !!hoveredShape),
        takeUntil(this.destroy$)
      )
      .subscribe(this.handleMouseDown);
  }

  handleMouseDown = ([start, hoveredShape]: [Point2D, Shape]): void => {
    of(start)
      .pipe(
        tap(() => {
          this.store.dispatch(new AppActions.ChangeEditingState({
            id: hoveredShape.id,
            state: true
          }));
        }),
        mergeMap(() => this.mouseService.onMouseMove()),
        takeUntil(this.mouseService.onMouseUp())
      )
      .subscribe(this.handleDrag(start, hoveredShape));
  }

  handleDrag = (start: Point2D, hoveredShape: Shape): PartialObserver<Point2D> => {
    return {
      next: (point: Point2D): void => {
        hoveredShape.moveTo(point);
      },
      complete: (): void => {
        this.store.dispatch(new AppActions.ChangeEditingState({
          id: hoveredShape.id,
          state: false
        }));
      }
    };
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
