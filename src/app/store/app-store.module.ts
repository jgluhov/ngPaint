import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './reducers/app.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      app: appReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ]
})
export class AppStoreModule { }
