import {
  Component,
  OnInit,
  Inject,
  HostListener,
  OnDestroy
} from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppActions, AppState, App } from '@store';
import { TOOL_LIST_TOKEN } from '@tools';
import { Tool, ToolTypes } from '@tools/types';
import { Observable, Subject, takeUntil, map } from '@rx';
import { ToolList } from '@tools/tool-list';
import { GuiService } from '../../services/gui/gui.service';

@Component({
  selector: 'app-toolbar',
  template: `
    <app-panel [panelTitle]="title">
      <div class="toolbar-list">
        <app-toolbar-item
          *ngFor="let tool of toolList"
          [tool]="tool"
          [selected]="isSelected(tool)"
          (select)="handleSelect($event)">
        </app-toolbar-item>
      </div>
    </app-panel>
  `,
  styleUrls: [ './toolbar.component.scss' ]
})
export class ToolbarComponent implements OnInit, OnDestroy {
  title = 'Tools';
  selectedTool: Tool;
  selectedTool$: Observable<Tool>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Inject(TOOL_LIST_TOKEN) public toolList: ToolList,
    private store: Store<AppState>,
    private guiService: GuiService
  ) {}

  ngOnInit(): void {
    this.store
      .select('app')
      .pipe(
        map((app: App) => app.selectedTool),
        takeUntil(this.destroy$)
      )
      .subscribe((tool: Tool) => this.selectedTool = tool);
  }

  isSelected(tool: Tool): boolean {
    return this.selectedTool === tool;
  }

  handleSelect(tool: Tool): void {
    this.guiService.setCursor(tool.cursor);
    this.store.dispatch(new AppActions.SelectTool(tool));

    const thickness = tool.type === ToolTypes.Pencil ? 2 : 10;
    this.store.dispatch(new AppActions.ChangeThickness(thickness));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
