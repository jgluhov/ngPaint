import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-pencil',
  template: `
    <p>
      pencil works!
    </p>
  `,
  styles: []
})
export class PencilComponent implements OnInit, OnDestroy {
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
  }
}
