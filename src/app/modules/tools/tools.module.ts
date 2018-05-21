import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsComponent } from './components/tools/tools.component';
import { PencilComponent } from './components/pencil/pencil.component';
import { BrushComponent } from './components/brush/brush.component';
import { ToolItemComponent } from './components/tool-item/tool-item.component';

@NgModule({
  entryComponents: [
    PencilComponent,
    BrushComponent
  ],
  imports: [
    CommonModule,
    GeneralModule,
    BrowserAnimationsModule
  ],
  declarations: [
    ToolsComponent,
    PencilComponent,
    BrushComponent,
    ToolItemComponent
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
