import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-brush',
  template: `
    <p>
      brush works!
    </p>
  `,
  styles: []
})
export class BrushComponent implements OnInit, OnDestroy {

  ngOnInit(): void {
    console.log('brush init');
  }

  ngOnDestroy(): void {
    console.log('brush destroy');
  }

}
