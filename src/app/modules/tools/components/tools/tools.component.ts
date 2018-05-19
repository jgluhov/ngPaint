import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <div>tool</div>
    </app-panel>
  `
})
export class ToolsComponent {
  title = 'Tools';
}
