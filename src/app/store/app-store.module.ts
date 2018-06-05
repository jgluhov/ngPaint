import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './reducers/app.reducer';
import { AppEffects } from './effects/app.effects';

@NgModule({
  imports: [
    EffectsModule.forRoot([
      AppEffects
    ]),
    StoreModule.forRoot({
      app: appReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ]
})
export class AppStoreModule { }
