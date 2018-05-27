import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import * as AppActions from '@store/actions/app.actions';
import { SelectColor } from '../../store/actions/app.actions';

@Component({
  selector: 'app-color-picker',
  template: `
    <input type="color"
      [ngModel]="selectedColor$ | async"
      (ngModelChange)="handleChange($event)">
  `,
  styles: []
})
export class ColorPickerComponent implements OnInit {
  selectedColor$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.selectedColor$ = this.store
      .select('app')
      .select('color');
  }

  handleChange(color: string): void {
    this.store.dispatch(new AppActions.SelectColor(color));
  }
}
