import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppStoreModule } from '@store/app-store.module';
import { AppComponent } from './app.component';
import { ToolsModule } from '@modules';
import { CursorableDirective } from './directives/cursorable/cursorable.directive';
import {
  PanelComponent,
  CanvasComponent,
  ToolbarComponent,
  ToolbarItemComponent,
  UsersComponent,
  OptionsBarComponent,
  MastheadComponent,
  SvgIconComponent
} from '@components';

@NgModule({
  declarations: [
    AppComponent,
    OptionsBarComponent,
    ToolbarComponent,
    ToolbarItemComponent,
    UsersComponent,
    MastheadComponent,
    PanelComponent,
    CursorableDirective,
    CanvasComponent,
    SvgIconComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppStoreModule,
    ToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
