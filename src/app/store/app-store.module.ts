import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { commonReducer } from './reducers/common.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      common: commonReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ]
})
export class AppStoreModule { }
