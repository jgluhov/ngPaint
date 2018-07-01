import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <div class="panel">
      <div class="panel__header">
        <ng-content select="header"></ng-content>
      </div>
      <div class="panel__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() panelTitle: string;

  ngOnInit(): void {

  }
}
