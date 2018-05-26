import { NgModule, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PencilComponent } from './components/pencil/pencil.component';
import { BrushComponent } from './components/brush/brush.component';
import { TOOLS_TOKEN, tools } from './tools';
import { ShapeFilterPipe } from './pipes/shape-filter/shape-filter.pipe';

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
    BrushComponent,
    ShapeFilterPipe
  ],
  providers: [
    {
      provide: TOOLS_TOKEN, useValue: tools
    }
  ],
  exports: [
    ShapeFilterPipe
  ]
})
export class ToolsModule { }
