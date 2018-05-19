import { Component, Inject, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { TOOL_LIST_TOKEN, Tool } from './tools-list';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <ul class="list">
        <li class="list__item"
          *ngFor="let tool of toolList"
          (click)="handleSelect(tool)"
        >
          <app-svg-icon [name]="tool.name"></app-svg-icon>
        </li>
      </ul>
    </app-panel>
    <ng-container #vcr></ng-container>
  `,
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  title = 'Tools';
  selectedTool: Tool;

  constructor(
    @Inject(TOOL_LIST_TOKEN) public toolList: Tool[],
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }

  handleSelect(tool: Tool): void {
    if (this.selectedTool === tool) {
      return;
    }

    this.selectedTool = tool;
    this.loadComponent(tool);
  }

  loadComponent(tool: Tool): void {
    this.vcr.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tool.component);
    this.vcr.createComponent(componentFactory);
  }
}
