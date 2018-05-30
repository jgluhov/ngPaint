import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { PolylineShape } from '@tools/shapes';

@Component({
  selector: '[appPolyline]',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolylineComponent implements OnInit {
  @Input('appPolyline') polyline: PolylineShape;
  constructor() {}

  ngOnInit(): void {
    console.log(this.polyline);
  }
}
