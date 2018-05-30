import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppStoreModule } from '@store/app-store.module';
import { AppComponent } from './app.component';
import { ToolsModule } from '@tools/tools.module';
import { CursorableDirective } from './directives/cursorable/cursorable.directive';
import { commonComponents } from '@components';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { CanvasService } from '@services/canvas/canvas.service';
import { PolylineComponent } from './components/polyline/polyline.component';

@NgModule({
  declarations: [
    AppComponent,
    CursorableDirective,
    MouseServiceDirective,
    ...commonComponents,
    PolylineComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppStoreModule,
    ToolsModule,
    FormsModule
  ],
  providers: [CanvasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
