import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppStoreModule } from '@store/app-store.module';
import { AppComponent } from './app.component';
import { ToolsModule } from '@tools/tools.module';
import { CursorableDirective } from './directives/cursorable/cursorable.directive';
import { components } from '@components';
import { MouseTrackerDirective } from './directives/mouse-tracker/mouse-tracker.directive';
import { ShapeService } from '@tools/services/shape/shape.service';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    CursorableDirective,
    MouseTrackerDirective,
    ...components,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppStoreModule,
    ToolsModule,
    FormsModule
  ],
  providers: [ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
