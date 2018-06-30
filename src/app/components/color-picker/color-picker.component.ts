import { Component, OnInit } from '@angular/core';
import { GuiService } from '@services/gui/gui.service';

@Component({
  selector: 'app-color-picker',
  template: `
    <input type="color"
      #colorPicker
      [ngModel]="color"
      (ngModelChange)="handleChange($event)">
  `
})
export class ColorPickerComponent implements OnInit {
  color: string;
  constructor(private guiService: GuiService) {
  }

  ngOnInit(): void {
    this.color = this.guiService.currentStroke;
  }

  handleChange(color: string): void {
    this.guiService.setStroke(color);
  }
}
