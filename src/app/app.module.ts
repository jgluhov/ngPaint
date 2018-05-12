import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { MastheadComponent } from './components/masthead/masthead.component';
import { ToolsModule } from './modules/tools/tools.module';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule,
    ToolsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
