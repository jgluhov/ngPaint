import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { GeneralModule } from '../general/general.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    UsersComponent
  ],
  exports: [UsersComponent]
})
export class UsersModule { }
