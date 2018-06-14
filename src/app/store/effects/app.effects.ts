import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, of, filter } from '@rx';
import * as AppActions from '@store/actions/app.actions';
import { ToolTypes } from '@tools/types';
import { CursorTypes } from '@tools/types/cursor-types';

@Injectable()
export class AppEffects {
  @Effect()
  selectTool$: Observable<AppActions.All> = this.actions$.pipe(
    ofType(AppActions.SELECT_TOOL),
    mergeMap((action: AppActions.SelectTool) =>
      of(new AppActions.ChangeCursor(action.payload.cursor))
    )
  );

  constructor(private actions$: Actions) {}
}
