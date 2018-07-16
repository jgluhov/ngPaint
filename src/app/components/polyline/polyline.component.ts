import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  DoCheck,
  ViewEncapsulation
} from '@angular/core';
import { PolylineShape } from '@shapes/polyline/polyline-shape';
import { CanvasService } from '@services';
import { ShapeStateEnum } from '@tools/enums';

@Component({
  selector: '[appPolyline]',
  template: `
    <svg:polyline
      [attr.points]="polyline.toString()"
      [attr.fill]="polyline.fill"
      [attr.stroke]="polyline.stroke"
      [attr.stroke-width]="polyline.strokeWidth"
      [attr.stroke-linecap]="polyline.strokeLinecap"
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PolylineComponent {
  @Input('appPolyline') polyline: PolylineShape;

  constructor(private canvasService: CanvasService) {

  }

  handleMouseEnter(): void {
    this.canvasService.hoveredShape$.next(this.polyline);
  }

  handleMouseLeave(): void {
    this.canvasService.hoveredShape$.next(null);
  }
}
