import { Component, Inject } from '@angular/core';
import { TOOL_LIST_TOKEN, Tool } from './tools-list';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <ul class="list">
        <li class="list__item" *ngFor="let tool of toolList" (onClick)="handleSelect()">
          <app-svg-icon [name]="tool.name"></app-svg-icon>
        </li>
      </ul>
    </app-panel>
  `,
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  title = 'Tools';

  constructor(@Inject(TOOL_LIST_TOKEN) public toolList: Tool[]) {
    console.log(toolList);
  }

  handleSelect(toolItem: string): void {
    console.log(`clicked on ${toolItem}`);
  }
}
