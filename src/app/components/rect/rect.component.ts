import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import { RectShape } from '@shapes/rect/rect';
import { HoverEvent } from '../../types/hover-event';

@Component({
  selector: '[appRect]',
  template: `
    <svg:rect
      [attr.x]="rect.x"
      [attr.y]="rect.y"
      [attr.width]="rect.width"
      [attr.height]="rect.height"
      [attr.fill]="rect.fill"
      [attr.stroke]="rect.stroke"
      [attr.rx]="rect.rx"
      [attr.ry]="rect.ry"
      [attr.stroke-width]="rect.strokeWidth"
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RectComponent {
  @Output('hover') hover: EventEmitter<HoverEvent> = new EventEmitter<HoverEvent>();
  @Input('appRect') rect: RectShape;

  handleMouseEnter(): void {
    this.hover.emit({ shape: this.rect, hovered: true });
  }

  handleMouseLeave(): void {
    this.hover.emit({ shape: this.rect, hovered: false });
  }

  constructor() {
    console.log('rect');
  }
}
