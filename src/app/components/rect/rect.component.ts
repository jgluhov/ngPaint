import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { RectShape } from '@shapes/rect/rect';

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
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RectComponent {
  @Input('appRect') rect: RectShape;
}
