import { Component, OnInit, Inject } from '@angular/core';
import { TOOL_LIST_TOKEN } from '@tools';
import { GuiService } from '@services/gui/gui.service';
import { IToolList } from '@tools/interfaces/tool-list.interface';
import { IToolListItem } from '@tools/interfaces';

@Component({
  selector: 'app-toolbar',
  template: `
    <app-panel>
      <header>{{title}}</header>
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
export class ToolbarComponent implements OnInit {
  title = 'Tools';

  constructor(
    @Inject(TOOL_LIST_TOKEN) public toolList: IToolList,
    private guiService: GuiService
  ) {}

  ngOnInit(): void {
    this.guiService.setTool(this.toolList[0]);
  }

  isSelected(tool: IToolListItem): boolean {
    return this.guiService.isCurrentTool(tool);
  }

  handleSelect(tool: IToolListItem): void {
    this.guiService.setTool(tool);
  }
}
