import { Component, Inject, ComponentFactoryResolver, ViewContainerRef, ViewChild } from '@angular/core';
import { TOOL_LIST_TOKEN } from './tools-list';
import { Tool } from '@models/tool';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <ul class="list">
        <li class="list__item"
          *ngFor="let tool of toolList"
          [@toolState]="isActive(tool)"
          (click)="handleSelect(tool)"
        >
          <app-svg-icon [name]="tool.name"></app-svg-icon>
        </li>
      </ul>
    </app-panel>
    <ng-container #vcr></ng-container>
  `,
  styleUrls: ['./tools.component.scss'],
  animations: [
    trigger('toolState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.4)'
      })),
      transition('inactive => active', animate('200ms ease-in-out')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
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

  isActive(tool: Tool): string {
    return this.selectedTool === tool ?
      'active' : 'inactive';
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
