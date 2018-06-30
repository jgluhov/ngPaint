import { Component, OnInit } from '@angular/core';
import { GuiService } from '@services/gui/gui.service';

@Component({
  selector: 'app-color-picker',
  template: `
    <input type="color"
      #colorPicker
      [ngModel]="currentColor"
      (ngModelChange)="handleChange($event)">
  `,
  styles: []
})
export class ColorPickerComponent implements OnInit {
  currentColor: string;
  constructor(private guiService: GuiService) {
  }

  ngOnInit(): void {
    this.currentColor = this.guiService.currentStroke;
  }

  handleChange(color: string): void {
    this.guiService.setColor(color);
  }
}
