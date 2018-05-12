import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { AppStoreModule } from './store/app-store.module';
import { MastheadComponent } from './components/masthead/masthead.component';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent
  ],
  imports: [
    BrowserModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
