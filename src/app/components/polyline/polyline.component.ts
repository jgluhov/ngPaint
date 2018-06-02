import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { PolylineShape, Shape } from '@tools/shapes';
import { CanvasService } from '@services/canvas/canvas.service';

@Component({
  selector: '[appPolyline]',
  template: `
    {{polyline.toString()}}
    <svg:polyline
      [attr.points]="polyline.toString()"
      [attr.fill]="polyline.fill"
      [attr.stroke]="polyline.stroke"
      [attr.stroke-width]="polyline.strokeWidth"
      (mouseenter)="polyline.hover()"
      (mouseleave)="polyline.blur()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolylineComponent {
  @Input('appPolyline') polyline: PolylineShape;
}
