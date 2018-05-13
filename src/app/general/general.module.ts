import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { MastheadComponent } from './masthead/masthead.component';

@NgModule({
  declarations: [
    PanelComponent,
    MastheadComponent
  ],
  exports: [
    PanelComponent,
    MastheadComponent
  ]
})
export class GeneralModule { }
