import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../../general/general.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsComponent } from './components/tools/tools.component';
import { PencilComponent } from './components/pencil/pencil.component';
import { TOOLS_TOKEN, tools } from './components/tools/tools';
import { BrushComponent } from './components/brush/brush.component';
import { ToolItemComponent } from './components/tool-item/tool-item.component';
import { CursorableDirective } from './directives/cursorable/cursorable.directive';

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
    ToolItemComponent,
    CursorableDirective
  ],
  providers: [
    {
      provide: TOOLS_TOKEN, useValue: tools
    }
  ],
  exports: [ToolsComponent]
})
export class ToolsModule { }
