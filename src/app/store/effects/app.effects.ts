import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as AppActions from '@store/actions/app.actions';
import { tap } from 'rxjs/operators';
import { CreateShape } from '../actions/app.actions';

@Injectable()
export class AppEffects {
  @Effect({ dispatch: false })
  createShape$: Observable<AppActions.All> = this.actions$
    .pipe(
      ofType(AppActions.CREATE_SHAPE),
      tap((action: CreateShape) => {
        console.log('action effect');
        action.payload.editing = false;
      })
    );

  constructor(private actions$: Actions) {}
}
