import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel/panel.component';
import { MastheadComponent } from './masthead/masthead.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { HttpModule } from '@angular/http';
import { TOOLS_TOKEN, tools } from './tools';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    PanelComponent,
    MastheadComponent,
    SvgIconComponent
  ],
  exports: [
    PanelComponent,
    MastheadComponent,
    SvgIconComponent
  ],
  providers: [
    {
      provide: TOOLS_TOKEN, useValue: tools
    }
  ]
})
export class GeneralModule { }
