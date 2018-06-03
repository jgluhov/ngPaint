import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import { RectShape } from '@shapes/rect/rect';
import { HoverEvent } from '../../types/hover-event';
import { ChangeHoverStatePayload } from '@store/actions/app.actions';

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
  @Input('appRect') rect: RectShape;
  @Output('hover') hover: EventEmitter<ChangeHoverStatePayload> = new EventEmitter<ChangeHoverStatePayload>();

  handleMouseEnter(): void {
    this.hover.emit({ id: this.rect.id, state: true });
  }

  handleMouseLeave(): void {
    this.hover.emit({ id: this.rect.id, state: false });
  }

  constructor() {
    console.log('rect');
  }
}
