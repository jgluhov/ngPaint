import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { PolylineShape, Shape } from '@tools/shapes';
import { CanvasService } from '@services/canvas/canvas.service';
import { ChangeHoverStatePayload } from '@store/actions/app.actions';

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
  @Output('hover') hoverer: EventEmitter<ChangeHoverStatePayload> = new EventEmitter<ChangeHoverStatePayload>();
  @Input('appPolyline') polyline: PolylineShape;

  handleMouseEvent(state: boolean): void {
    this.hoverer.emit({ id: this.polyline.id, state });
  }
}
