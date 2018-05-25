import {
  Component,
  OnInit,
  Inject,
  HostListener,
  OnDestroy
} from '@angular/core';
import * as AppActions from '@store/actions/app.actions';
import { TOOLS_TOKEN } from '@tools/tools';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@models';
import { Subject } from 'rxjs/Subject';
import { takeUntil } from 'rxjs/operators';

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
export class ToolbarComponent implements OnInit, OnDestroy {
  title = 'Tools';
  selectedTool: Tool;
  selectedTool$: Observable<Tool>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  @HostListener('document:click', ['$event', '$event.target'])
  public handleClick(evt: MouseEvent, target: HTMLElement): void {
    if (target.closest('#svg')) {
      return;
    }

    this.store.dispatch(new AppActions.SelectTool(null));
  }

  constructor(
    @Inject(TOOLS_TOKEN) public tools: Tool[],
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.selectedTool$ = this.store
      .select('app')
      .select('tool')
      .pipe(takeUntil(this.destroy$));

    this.selectedTool$.subscribe((tool: Tool) => {
      this.selectedTool = tool;
    });
  }

  isSelected(tool: Tool): boolean {
    return this.selectedTool === tool;
  }

  handleSelect(tool: Tool): void {
    this.store.dispatch(new AppActions.SelectTool(tool));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
