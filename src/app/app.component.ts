import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket/socket.service';
import { SocketEventEnum } from '@server/socket.enums';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <app-masthead></app-masthead>
      <app-toolbar></app-toolbar>
      <app-options-bar></app-options-bar>
      <app-users></app-users>
      <app-canvas></app-canvas>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private socketService: SocketService) {
  }

  ngOnInit(): void {
    this.socketService.init();
    this.socketService.start();
  }
}
