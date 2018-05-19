import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general/general.module';
import { ToolsComponent } from './components/tools/tools.component';
import { ToolItemComponent } from './components/tool-item/tool-item.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    ToolsComponent,
    ToolItemComponent
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
