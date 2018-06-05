import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TOOLS_TOKEN, tools } from './tools';
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
    ControlToolComponent
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
      provide: TOOLS_TOKEN, useValue: tools
    }
  ]
})
export class ToolsModule { }
