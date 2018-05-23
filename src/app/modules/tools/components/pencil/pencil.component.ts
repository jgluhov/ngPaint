import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { WorkSpace } from '@components/canvas/canvas.component';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject
} from '@angular/core';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  constructor(@Inject('WorkSpace') private workSpace: WorkSpace) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}
