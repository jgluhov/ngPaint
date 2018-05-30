import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  HostBinding,
  OnChanges,
  SimpleChanges,
  SimpleChange
} from '@angular/core';
import { PolylineShape } from '@tools/shapes';

@Component({
  selector: '[appPolyline]',
  template: `
    <svg:polyline
      [attr.points]="polyline.toString()"
      [attr.fill]="polyline.fill"
      [attr.stroke]="polyline.stroke"
      [attr.stroke-width]="polyline.strokeWidth"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolylineComponent implements OnInit, OnChanges {
  @Input('appPolyline') polyline: PolylineShape;

  constructor() {}

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
