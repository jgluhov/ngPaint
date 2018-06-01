import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TOOLS_TOKEN, tools } from './tools';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';
import { GeometryToolComponent } from './components/geometry-tool/geometry-tool.component';
import { ControlToolComponent } from './components/control-tool/control-tool.component';

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
    ControlToolComponent
  ],
  providers: [
    {
      provide: TOOLS_TOKEN, useValue: tools
    }
  ]
})
export class ToolsModule { }
