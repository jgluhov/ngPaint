import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './components/canvas/canvas.component';
import { GeneralModule } from '../../general/general.module';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    CanvasComponent
  ],
  exports: [
    CanvasComponent
  ]
})
export class CanvasModule { }
