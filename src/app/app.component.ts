import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from './store/app-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedColor$: Observable<string>;
  constructor(private store: Store<AppState>) {
    this.selectedColor$ = store
      .select('common')
      .select('selectedColor');
  }
}
