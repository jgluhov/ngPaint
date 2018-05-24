import { Component, OnInit, Inject } from '@angular/core';
import { TOOLS_TOKEN } from '@tools/tools';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@models';
import * as AppActions from '@store/actions/app.actions';

@Component({
  selector: 'app-toolbar',
  template: `
    <app-panel [panelTitle]="title">
      <div class="toolbar-list">
        <app-toolbar-item
          *ngFor="let tool of tools"
          [tool]="tool"
          [selected]="isSelected(tool)"
          (select)="handleSelect($event)">
        </app-toolbar-item>
      </div>
    </app-panel>
  `,
  styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit {
  title = 'Tools';
  selectedTool: Tool;
  constructor(
    @Inject(TOOLS_TOKEN) public tools: Tool[],
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
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
