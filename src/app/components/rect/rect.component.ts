import {
  Component,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';
import { RectShape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';
import { CanvasService } from '@services';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class RectComponent {
  @Input('appRect') rect: RectShape;
  constructor(private canvasService: CanvasService) {}

  handleMouseEnter(): void {
    this.canvasService.hoveredShape$.next(this.rect);
  }

  handleMouseLeave(): void {
    this.canvasService.hoveredShape$.next(null);
  }
}
