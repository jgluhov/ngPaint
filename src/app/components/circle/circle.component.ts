import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  EventEmitter,
  Output
} from '@angular/core';
import { CircleShape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';
import { GuiService } from '../../services/gui/gui.service';

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
      (mouseenter)="handleMouseEnter()"
      (mouseleave)="handleMouseLeave()"
    />
  `,
  styles: [`
    circle {
      pointer-events: all;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CircleComponent {
  @Input('appCircle') circle: CircleShape;

  constructor(private guiService: GuiService) {}

  handleMouseEnter(): void {
    // this.shapeStateChange.emit({ id: this.circle.id, state: ShapeStateEnum.HOVERED });
  }

  handleMouseLeave(): void {
    // this.shapeStateChange.emit({ id: this.circle.id, state: ShapeStateEnum.STABLE });
  }
}
