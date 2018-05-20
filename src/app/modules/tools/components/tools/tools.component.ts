import {
  Component,
  Inject,
  OnInit,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { TOOLS_TOKEN } from './tools';
import { Tool } from '@models/tool';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import { skip } from 'rxjs/operators';
import * as AppActions from '@store/actions/app.actions';

@Component({
  selector: 'app-tools',
  template: `
    <app-panel [panelTitle]="title">
      <div class="tools">
        <app-tool-item
            *ngFor="let tool of tools"
            [tool]="tool"
            [selected]="isSelected(tool)"
            (select)="handleSelect($event)">
          </app-tool-item>
      </div>
    </app-panel>
    <ng-container #vcr></ng-container>
  `,
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;

  toolChanges: Observable<Tool>;
  title = 'Tools';
  selectedTool: Tool;

  constructor(
    @Inject(TOOLS_TOKEN) public tools: Tool[],
    private componentFactoryResolver: ComponentFactoryResolver,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.toolChanges = this.store
      .select('app')
      .select('tool')
      .pipe(skip(1));

    this.toolChanges
      .subscribe(this.loadComponent);
  }

  loadComponent = (tool: Tool): void => {
    this.vcr.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(tool.component);
    this.vcr.createComponent(componentFactory);
  }

  isSelected(tool: Tool): boolean {
    return this.selectedTool === tool;
  }

  handleSelect(tool: Tool): void {
    if (this.selectedTool === tool) {
      return;
    }

    this.selectedTool = tool;
    this.store.dispatch(new AppActions.SelectTool(tool));
  }
}
