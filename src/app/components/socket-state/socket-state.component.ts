import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socket-state',
  template: `
    <div class="icon" [ngClass]="getConnectionClass()">
  `,
  styleUrls: ['./socket-state.component.scss']
})
export class SocketStateComponent {
  @Input() state: boolean;

  getConnectionClass(): string {
    return this.state ?
      'icon__socket-connected' : 'icon__socket-disconnected';
  }
}
