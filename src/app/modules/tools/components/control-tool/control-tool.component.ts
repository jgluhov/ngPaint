import { Component, OnInit, OnDestroy } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { Point2D } from '@math';
import { CanvasService } from '@services';
import { Shape } from '@shapes';
import { Store } from '@ngrx/store';
import { AppState, App, AppActions } from '@store';
import { Subject,
  takeUntil,
  mergeMap,
  withLatestFrom,
  map,
  tap,
  filter,
  of,
  Observable,
  PartialObserver,
  startWith,
  pairwise
} from '@rx';

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
        mergeMap(() => this.mouseService.onMouseMove().pipe(
          startWith(start),
          pairwise(),
          map(([prev, next]: [Point2D, Point2D]) => Point2D.getDifference(prev, next)),
          filter((move: Point2D) => move.x !== 0 && move.y !== 0)
        )),
        takeUntil(this.mouseService.onMouseUp())
      )
      .subscribe(this.handleDrag(hoveredShape));
  }

  handleDrag = (hoveredShape: Shape): PartialObserver<Point2D> => {
    return {
      next: (move: Point2D): void => {
        hoveredShape.move(move);
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
