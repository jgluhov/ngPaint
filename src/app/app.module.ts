import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ToolsModule } from '@tools/tools.module';
import { CursorableDirective } from './directives/cursorable/cursorable.directive';
import { commonComponents } from '@components';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { CanvasService } from '@services/canvas/canvas.service';
import { PolylineComponent } from './components/polyline/polyline.component';
import { CircleComponent } from './components/circle/circle.component';
import { RectComponent } from './components/rect/rect.component';
import { UserComponent } from './components/user/user.component';
import { SocketStateComponent } from './components/socket-state/socket-state.component';

@NgModule({
  declarations: [
    AppComponent,
    CursorableDirective,
    MouseServiceDirective,
    ...commonComponents,
    PolylineComponent,
    CircleComponent,
    RectComponent,
    UserComponent,
    SocketStateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ToolsModule,
    FormsModule
  ],
  providers: [
    CanvasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
