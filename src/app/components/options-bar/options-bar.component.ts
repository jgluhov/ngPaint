import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-bar',
  template: `
    <app-panel [panelTitle]="title">
    </app-panel>
  `
})
export class OptionsBarComponent implements OnInit {
  title = 'Adjustments';
  constructor() { }

  ngOnInit(): void {
  }

}
