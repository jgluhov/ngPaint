import {
  Component,
  Input,
  ChangeDetectionStrategy,
  HostListener,
  EventEmitter,
  Output
} from '@angular/core';
import { CircleShape } from '@shapes/circle/circle';
import { ChangeHoverStatePayload } from '../../store/actions/app.actions';

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
  @Output('hover') hoverer: EventEmitter<ChangeHoverStatePayload> = new EventEmitter<ChangeHoverStatePayload>();

  handleMouseEnter(): void {
    this.hoverer.emit({ id: this.circle.id, state: true });
  }

  handleMouseLeave(): void {
    this.hoverer.emit({ id: this.circle.id, state: false });
  }

  constructor() {
    console.log('create circle');
  }
}
