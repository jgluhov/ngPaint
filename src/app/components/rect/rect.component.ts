import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { RectShape } from '@shapes';
import { ShapeStateEnum } from '@tools/enums';

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
  @Output('shapeStateChange') shapeStateChange = new EventEmitter<{id: string; state: ShapeStateEnum}>();

  handleMouseEnter(): void {
    this.shapeStateChange.emit({ id: this.rect.id, state: ShapeStateEnum.HOVERED });
  }

  handleMouseLeave(): void {
    this.shapeStateChange.emit({ id: this.rect.id, state: ShapeStateEnum.STABLE });
  }
}
