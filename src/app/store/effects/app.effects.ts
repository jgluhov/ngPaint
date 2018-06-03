import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as AppActions from '@store/actions/app.actions';

@Injectable()
export class AppEffects {
  @Effect({ dispatch: false })
  createShape$: Observable<AppActions.All> = this.actions$
    .pipe(
      ofType(AppActions.CREATE_SHAPE),
      tap((action: AppActions.CreateShape) => action.payload.editing = false)
    );

  constructor(private actions$: Actions) {}
}
