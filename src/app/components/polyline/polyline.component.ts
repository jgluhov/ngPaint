import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { PolylineShape, Shape } from '@shapes';
import { CanvasService } from '@services';
import { ChangeStatePayload } from '@store';
import { ShapeStates } from '@tools/types/shape-states';

@Component({
  selector: '[appPolyline]',
  template: `
    <svg:polyline
      [attr.points]="polyline.toString()"
      [attr.fill]="polyline.fill"
      [attr.stroke]="polyline.stroke"
      [attr.stroke-width]="polyline.strokeWidth"
      (mouseenter)="handleMouseEvent(true)"
      (mouseleave)="handleMouseEvent(false)"
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
  @Output('hover') hoverer: EventEmitter<ChangeStatePayload> = new EventEmitter<ChangeStatePayload>();
  @Input('appPolyline') polyline: PolylineShape;

  handleMouseEvent(isHovered: boolean): void {
    const state = isHovered ? ShapeStates.HOVERED : ShapeStates.STABLE;
    this.hoverer.emit({ id: this.polyline.id, state });
  }
}
