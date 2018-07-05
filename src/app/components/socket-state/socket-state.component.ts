import { Component, OnInit } from '@angular/core';
import { SocketService } from '@services';

@Component({
  selector: 'app-socket-state',
  template: `
    <div class="icon" [ngClass]="getClass()" (click)="handleClick()">
  `,
  styleUrls: ['./socket-state.component.scss']
})
export class SocketStateComponent implements OnInit {
  isConnected;
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.stateChanges()
      .subscribe((state: boolean) => this.isConnected = state);
  }

  getClass(): string {
    return this.isConnected ?
      'icon__socket-connected' : 'icon__socket-disconnected';
  }

  handleClick(): void {
    this.socketService.disconnect();
  }
}
