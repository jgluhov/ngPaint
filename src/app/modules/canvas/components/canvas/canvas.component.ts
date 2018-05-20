import { Component, OnInit } from '@angular/core';
import { AppState } from '@store/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@models/tool';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html'
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  toolChanges: Observable<Tool>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.toolChanges = this.store
      .select('app').select('tool').pipe(skip(1));
  }

}
