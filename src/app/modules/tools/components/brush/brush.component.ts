import {
  Component,
  OnInit,
  OnDestroy,
  Inject
} from '@angular/core';
import { WorkSpace } from '@components/canvas/canvas.component';

@Component({
  selector: 'app-brush',
  template: ``,
  styles: []
})
export class BrushComponent implements OnInit, OnDestroy {
  constructor(@Inject('WorkSpace') private workSpace: WorkSpace) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
