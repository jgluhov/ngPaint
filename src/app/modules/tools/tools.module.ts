import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general/general.module';
import { ToolsComponent } from './components/tools/tools.component';

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
