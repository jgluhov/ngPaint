import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppStoreModule } from '@store/app-store.module';
import { AppComponent } from './app.component';
import { ToolsModule } from '@tools/tools.module';
import { CursorableDirective } from './directives/cursorable/cursorable.directive';
import { components } from '@components';
import { MouseTrackerDirective } from './directives/mouse-tracker/mouse-tracker.directive';
import { ShapeService } from '@services/shape/shape.service';

@NgModule({
  declarations: [
    AppComponent,
    CursorableDirective,
    MouseTrackerDirective,
    ...components
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppStoreModule,
    ToolsModule
  ],
  providers: [ShapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
