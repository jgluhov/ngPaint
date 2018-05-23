import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PencilComponent } from './components/pencil/pencil.component';
import { BrushComponent } from './components/brush/brush.component';
import { TOOLS_TOKEN, tools } from './tools';

@NgModule({
  entryComponents: [
    PencilComponent,
    BrushComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    PencilComponent,
    BrushComponent
  ],
  providers: [
    {
      provide: TOOLS_TOKEN, useValue: tools
    }
  ]
})
export class ToolsModule { }
