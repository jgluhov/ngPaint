import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './components/tools/tools.component';
import { PanelComponent } from './../../components/panel/panel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ToolsComponent,
    PanelComponent
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
