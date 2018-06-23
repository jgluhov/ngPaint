import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IToolListItem } from '../../modules/tools/interfaces/tool-list-item.interface';
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
      <app-svg-icon [imageUrl]="tool.imageUrl"
        (mousedown)="handleSelect($event)">
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
  @Output() select: EventEmitter<IToolListItem> = new EventEmitter<IToolListItem>();
  @Input() tool: IToolListItem;
  @Input()
  set selected(isSelected: boolean) {
    this.toolState = isSelected ? 'active' : 'inactive';
  }

  handleSelect(evt: MouseEvent): void {
    evt.stopPropagation();
    this.select.emit(this.tool);
  }
}
