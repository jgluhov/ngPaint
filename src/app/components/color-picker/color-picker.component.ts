import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import { App, AppState, AppActions } from '@store';
import { Observable, map } from '@rx';

@Component({
  selector: 'app-color-picker',
  template: `
    <input type="color"
      #colorPicker
      (click)="handleOpen()"
      [ngModel]="selectedColor$ | async"
      (ngModelChange)="handleChange($event)">
  `,
  styles: []
})
export class ColorPickerComponent implements OnInit {
  selectedColor$: Observable<string>;
  @ViewChild('colorPicker') colorPicker: ElementRef;
  constructor(
    private store: Store<AppState>,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.selectedColor$ = this.store
      .select('app')
      .pipe(map((app: App) => app.selectedColor));
  }

  handleChange(color: string): void {
    this.store.dispatch(new AppActions.SelectColor(color));
  }

  handleOpen(): void {
    this.store.dispatch(new AppActions.SelectTool(null));
  }
}
