import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  EventEmitter,
  Output
} from '@angular/core';
import { CircleShape } from '@shapes';
import { ChangeStatePayload } from '@store/actions/app.actions';
import { ShapeStates } from '../../modules/tools/types/shape-states';

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
      (mouseenter)="handleMouseEvent(true)"
      (mouseleave)="handleMouseEvent(false)"
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
  @Output('hover') hoverer: EventEmitter<ChangeStatePayload> = new EventEmitter<ChangeStatePayload>();

  handleMouseEvent(isHovered: boolean): void {
    const state = isHovered ?
      ShapeStates.HOVERED : ShapeStates.STABLE;

    this.hoverer.emit({ id: this.circle.id, state });
  }
}
