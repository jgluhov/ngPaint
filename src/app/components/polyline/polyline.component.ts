import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { PolylineShape } from '@shapes';
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
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
    />
  `,
  styles: [`
    polyline {
      pointer-events: all;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolylineComponent {
  @Input('appPolyline') polyline: PolylineShape;
  @Output('shapeStateChange') shapeStateChange = new EventEmitter<{id: string; state: ShapeStateEnum}>();

  handleMouseEnter(): void {
    this.shapeStateChange.emit({ id: this.polyline.id, state: ShapeStateEnum.HOVERED });
  }

  handleMouseLeave(): void {
    this.shapeStateChange.emit({ id: this.polyline.id, state: ShapeStateEnum.STABLE });
  }
}
