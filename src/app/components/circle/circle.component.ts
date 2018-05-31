import {
  Component,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { CircleShape } from '@shapes/circle/circle';

@Component({
  selector: '[appCircle]',
  template: `
    <svg:circle
      [attr.cx]="circle.cx"
      [attr.cy]="circle.cy"
      [attr.r]="circle.r"
      [attr.fill]="circle.fill"
      [attr.stroke]="circle.stroke"
      [attr.stroke-width]="circle.strokeWidth"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent {
  @Input('appCircle') circle: CircleShape;
}
