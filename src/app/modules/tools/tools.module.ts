import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TOOL_LIST_TOKEN, toolList } from './tool-list';
import {
  DrawingToolComponent,
  GeometryToolComponent,
  ControlToolComponent,
  PointerToolComponent
} from './components';

@NgModule({
  entryComponents: [
    DrawingToolComponent,
    GeometryToolComponent,
    ControlToolComponent,
    PointerToolComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  declarations: [
    DrawingToolComponent,
    GeometryToolComponent,
    ControlToolComponent,
    PointerToolComponent
  ],
  providers: [
    {
      provide: TOOL_LIST_TOKEN, useValue: toolList
    }
  ]
})
export class ToolsModule { }
