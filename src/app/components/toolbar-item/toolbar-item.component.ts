import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Tool } from '@models';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { skip, zip } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as AppActions from '@store/actions/app.actions';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-toolbar-item',
  template: `
    <div class="tool-item" [@toolState]="toolState">
      <app-svg-icon [imageUrl]="tool.options.imageUrl"
        (click)="handleClick($event)">
      </app-svg-icon>
    </div>
  `,
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
  ],
  styleUrls: [ './toolbar-item.component.scss' ]
})
export class ToolbarItemComponent {
  toolState = 'inactive';
  @Output() select: EventEmitter<Tool> = new EventEmitter<Tool>();
  @Input() tool: Tool;
  @Input()
  set selected(isSelected: boolean) {
    this.toolState = isSelected ? 'active' : 'inactive';
  }

  handleClick(evt: MouseEvent): void {
    evt.stopPropagation();
    this.select.emit(this.tool);
  }
}
