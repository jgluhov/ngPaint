import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as AppActions from '@store/actions/app.actions';
import { HoverEvent } from '../../types/hover-event';

@Injectable()
export class AppEffects {
  @Effect({ dispatch: false })
  createShape$: Observable<AppActions.All> = this.actions$
    .pipe(
      ofType(AppActions.CREATE_SHAPE),
      tap((action: AppActions.CreateShape) => action.payload.editing = false)
    );

  @Effect({ dispatch: false })
  hoverShape$: Observable<AppActions.All> = this.actions$
    .pipe(
      ofType(AppActions.HOVER_SHAPE),
      tap((action: AppActions.HoverShape) => {
        const { shape, hovered }: HoverEvent = action.payload;
        shape.hovered = hovered;
      })
    );

  constructor(private actions$: Actions) {}
}
