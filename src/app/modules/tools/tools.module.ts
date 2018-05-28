import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TOOLS_TOKEN, tools } from './tools';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';

@NgModule({
  entryComponents: [
    DrawingToolComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [],
  providers: [
    {
      provide: TOOLS_TOKEN, useValue: tools
    }
  ]
})
export class ToolsModule { }
