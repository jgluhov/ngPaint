import { Component } from '@angular/core';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <ul class="list">
        <li class="list__item" (onClick)="handleSelect()">
          <app-svg-icon name="pencil"></app-svg-icon>
        </li>
        <li class="list__item" (onClick)="handleSelect()">
          <app-svg-icon name="brush"></app-svg-icon>
        </li>
      </ul>
    </app-panel>
  `,
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  title = 'Tools';

  handleSelect(toolItem: string): void {
    console.log(`clicked on ${toolItem}`);
  }
}
