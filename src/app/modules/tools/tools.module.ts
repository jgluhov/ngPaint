import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general/general.module';
import { ToolsComponent } from './components/tools/tools.component';
import { PencilComponent } from './components/pencil/pencil.component';
import { TOOL_LIST_TOKEN, toolList } from './components/tools/tools-list';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    ToolsComponent,
    PencilComponent
  ],
  providers: [
    {
      provide: TOOL_LIST_TOKEN, useValue: toolList
    }
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
