import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output
} from '@angular/core';
import { RectShape } from '@shapes/rect/rect';
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
      (mouseenter)="handleMouseEvent(true)"
      (mouseleave)="handleMouseEvent(false)"
    />
  `,
  styles: [`
    rect {
      pointer-events: all;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RectComponent {
  @Input('appRect') rect: RectShape;
  @Output('hover') hoverer: EventEmitter<ChangeHoverStatePayload> = new EventEmitter<ChangeHoverStatePayload>();

  handleMouseEvent(state: boolean): void {
    this.hoverer.emit({ id: this.rect.id, state: state });
  }
}
