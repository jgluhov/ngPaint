import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { CircleShape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';
import { CanvasService, GuiService } from '@services';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class CircleComponent {
  @Input('appCircle') circle: CircleShape;
  constructor(private canvasService: CanvasService) {}

  handleMouseEnter(): void {
    this.canvasService.hoveredShape$.next(this.circle);
  }

  handleMouseLeave(): void {
    this.canvasService.hoveredShape$.next(null);
  }
}
