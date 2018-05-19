import {
  Component,
  Inject,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { TOOL_LIST_TOKEN } from './tools-list';
import { Tool } from '@models/tool';
import { animations } from './tools.animations';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import * as AppActions from '@store/actions/app.actions';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <ul class="list">
        <li class="list__item"
          *ngFor="let tool of toolList"
          [@toolState]="isActive(tool)"
          (click)="selectTool(tool)"
        >
          <app-svg-icon [name]="tool.name"></app-svg-icon>
        </li>
      </ul>
    </app-panel>
    <ng-container #vcr></ng-container>
  `,
  styleUrls: ['./tools.component.scss'],
  animations: [ ...animations ]
})
export class ToolsComponent implements OnInit {
  toolChanges: Observable<Tool>;
  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  title = 'Tools';
  selectedTool: Tool;

  constructor(
    @Inject(TOOL_LIST_TOKEN) public toolList: Tool[],
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.toolChanges = this.store.select('app').select('tool');
    this.toolChanges.subscribe(this.loadComponent);
  }

  isActive(tool: Tool): string {
    return this.selectedTool === tool ? 'active' : 'inactive';
  }

  selectTool(tool: Tool): void {
    if (this.selectedTool === tool) {
      return;
    }

    this.selectedTool = tool;

    this.store.dispatch(new AppActions.SelectTool(tool));
  }

  loadComponent = (tool?: Tool): void => {
    if (!tool) {
      return;
    }

    this.vcr.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tool.component);
    this.vcr.createComponent(componentFactory);
  }
}
