import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <app-tool-item name="pencil" (select)="handleSelect($event)"></app-tool-item>
    </app-panel>
  `
})
export class ToolsComponent {
  title = 'Tools';

  handleSelect(toolItem: string): void {
    console.log(`clicked on ${toolItem}`);
  }
}
