import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <ul class="list">
        <li class="list__item" (onClick)="handleSelect()"></li>
      </ul>
    </app-panel>
  `
})
export class ToolsComponent {
  title = 'Tools';

  handleSelect(toolItem: string): void {
    console.log(`clicked on ${toolItem}`);
  }
}
