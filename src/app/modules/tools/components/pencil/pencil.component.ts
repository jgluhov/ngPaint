import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { CanvasComponent } from '../../../canvas/components/canvas/canvas.component';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
