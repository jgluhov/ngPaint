import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { ToolsModule } from './modules/tools/tools.module';
import { UsersModule } from './modules/users/users.module';
import { GeneralModule } from './general/general.module';
import { CanvasModule } from './modules/canvas/canvas.module';
import { OptionsBarComponent } from './components/options-bar/options-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    OptionsBarComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule,
    ToolsModule,
    UsersModule,
    GeneralModule,
    CanvasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
