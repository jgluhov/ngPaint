import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from '../../components/panel/panel.component';

@NgModule({
  declarations: [
    PanelComponent
  ],
  exports: [
    PanelComponent
  ]
})
export class GeneralModule { }
