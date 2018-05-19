import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tool } from '@models/tool';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { skip } from 'rxjs/operators';
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
  selector: 'app-tool-item',
  template: `
    <app-svg-icon [name]="tool.name"
      [@toolState]="toolState"
      (click)="handleClick()">
    </app-svg-icon>
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
  ]
})
export class ToolItemComponent implements OnInit {
  toolState = 'inactive';
  @Output() select: EventEmitter<Tool> = new EventEmitter<Tool>();
  @Input() tool: Tool;
  @Input()
  set selected(isSelected: boolean) {
    this.toolState = isSelected ? 'active' : 'inactive';
  }

  constructor() {}

  ngOnInit(): void {
  }

  handleClick(): void {
    this.select.emit(this.tool);
  }
}
