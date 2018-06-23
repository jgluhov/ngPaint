import {
  Component,
  OnInit,
  Inject,
  HostListener,
  OnDestroy
} from '@angular/core';
import { TOOL_LIST_TOKEN } from '@tools';
import { Observable, Subject, takeUntil, map } from '@rx';
import { GuiService } from '@services/gui/gui.service';
import { IToolList } from '@tools/interfaces/tool-list.interface';
import { IToolListItem } from '@tools/interfaces';
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
export class ToolbarComponent implements OnDestroy {
  title = 'Tools';
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    @Inject(TOOL_LIST_TOKEN) public toolList: IToolList,
    private guiService: GuiService
  ) {}

  isSelected(tool: IToolListItem): boolean {
    return this.guiService.isCurrentTool(tool);
  }

  handleSelect(tool: IToolListItem): void {
    this.guiService.setTool(tool);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
