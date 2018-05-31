import {
  Component,
  Input,
  ChangeDetectionStrategy
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
export class PolylineComponent {
  @Input('appPolyline') polyline: PolylineShape;
}
