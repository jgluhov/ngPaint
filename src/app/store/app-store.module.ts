import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { commonReducer } from './reducers/common.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      common: commonReducer
    })
  ]
})
export class AppStoreModule { }
