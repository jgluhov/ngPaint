import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { PolylineShape } from '@tools/shapes';
import { CanvasService } from '../../services/canvas/canvas.service';

@Component({
  selector: '[appPolyline]',
  template: `
    <svg:polyline
      [attr.points]="polyline.toString()"
      [attr.fill]="polyline.fill"
      [attr.stroke]="polyline.stroke"
      [attr.stroke-width]="polyline.strokeWidth"
      (mousedown)="handleMouseDown()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolylineComponent {
  @Input('appPolyline') polyline: PolylineShape;

  constructor(private canvasService: CanvasService) {
  }

  handleMouseDown(): void {
    // this.canvasService.
  }
}
