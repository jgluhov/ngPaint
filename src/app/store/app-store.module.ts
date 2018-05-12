import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';

@NgModule({
  imports: [
    StoreModule.forRoot({
      message: simpleReducer
    })
  ]
})
export class AppStoreModule { }
