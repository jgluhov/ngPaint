import { Component, OnInit } from '@angular/core';
import { SocketService } from '@services';

@Component({
  selector: 'app-socket-state',
  template: `
    <div class="icon" [ngClass]="getClass()">
  `,
  styleUrls: ['./socket-state.component.scss']
})
export class SocketStateComponent implements OnInit {
  isConnected: boolean;
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.connectionState$
      .subscribe((state: boolean) => this.isConnected = state);
  }

  getClass(): string {
    return this.isConnected ?
      'icon__socket-connected' : 'icon__socket-disconnected';
  }
}
