import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { MastheadComponent } from './masthead/masthead.component';
import { OptionsBarComponent } from './options-bar/options-bar.component';

@NgModule({
  declarations: [
    PanelComponent,
    MastheadComponent,
    OptionsBarComponent
  ],
  exports: [
    PanelComponent,
    MastheadComponent,
    OptionsBarComponent
  ]
})
export class GeneralModule { }
