import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket/socket.service';

@Component({
  selector: 'app-users',
  template: `
    <app-panel>
      <header>
        {{this.title}}
        <app-svg-icon [imageUrl]="imageUrl" class="socket-state-icon"></app-svg-icon>
      </header>
    </app-panel>
  `,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  imageUrl;
  connectedUrl = 'assets/icons/socket-connected.svg';
  disconnectedUrl = 'assets/icons/socket-disconnected.svg';
  isConnected$;

  constructor(public socketService: SocketService) {
  }

  ngOnInit(): void {
    this.socketService.connectionState$
      .subscribe((isConnected: boolean) => {
        this.imageUrl = isConnected ?
          this.connectedUrl : this.disconnectedUrl;
      });
  }

}
