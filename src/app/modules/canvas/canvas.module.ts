import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvasComponent } from './components/canvas/canvas.component';
import { GeneralModule } from '../../general/general.module';
import { CursorableDirective } from './directives/cursorable/cursorable.directive';

@NgModule({
  imports: [
    CommonModule,
    GeneralModule
  ],
  declarations: [
    CanvasComponent,
    CursorableDirective
  ],
  exports: [
    CanvasComponent
  ]
})
export class CanvasModule { }
