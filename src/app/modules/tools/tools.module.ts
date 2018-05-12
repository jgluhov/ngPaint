import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsComponent } from './components/tools/tools.component';
import { GeneralModule } from '../general/general.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    ToolsComponent
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
