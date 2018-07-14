import { Component, OnInit } from '@angular/core';
import { SocketService } from '@services';

@Component({
  selector: 'app-socket-state',
  template: `
    <div class="icon" [ngClass]="getConnectionClass()">
  `,
  styleUrls: ['./socket-state.component.scss']
})
export class SocketStateComponent implements OnInit {
  connectionState;
  constructor(private socketService: SocketService) {}

  ngOnInit(): void {
    // this.socketService.getConnectionState()
    //   .subscribe((connectionState: boolean) => {
    //     this.connectionState = connectionState;
    //   });
  }

  getConnectionClass(): string {
    return this.connectionState ?
      'icon__socket-connected' : 'icon__socket-disconnected';
  }
}
