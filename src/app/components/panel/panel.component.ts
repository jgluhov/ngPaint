import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `
    <div class="panel">
      <div class="panel__title" *ngIf="panelTitle">
          {{panelTitle}}
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
