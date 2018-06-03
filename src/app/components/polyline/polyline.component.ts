import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter
} from '@angular/core';
import { PolylineShape, Shape } from '@tools/shapes';
import { CanvasService } from '@services/canvas/canvas.service';
import { HoverEvent } from '../../types/hover-event';

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
  @Output('hover') hover: EventEmitter<HoverEvent> = new EventEmitter<HoverEvent>();
  @Input('appPolyline') polyline: PolylineShape;

  handleMouseEnter(): void {
    this.hover.emit({ shape: this.polyline, hovered: true });
  }

  handleMouseLeave(): void {
    this.hover.emit({ shape: this.polyline, hovered: false });
  }

  constructor() {
    console.log('polyline');
  }
}
