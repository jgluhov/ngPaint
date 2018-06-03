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
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolylineComponent {
  @Output('hover') hover: EventEmitter<ChangeHoverStatePayload> = new EventEmitter<ChangeHoverStatePayload>();
  @Input('appPolyline') polyline: PolylineShape;

  handleMouseEnter(): void {
    this.hover.emit({ id: this.polyline.id, state: true });
  }

  handleMouseLeave(): void {
    this.hover.emit({ id: this.polyline.id, state: false });
  }

  constructor() {
    console.log('polyline');
  }
}
