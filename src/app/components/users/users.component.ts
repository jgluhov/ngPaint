import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket/socket.service';
import { UserService } from '../../services/user/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  template: `
    <app-panel>
      <header>
        {{this.title}}
        <app-socket-state [state]="connectionState"></app-socket-state>
      </header>
      <div class="user-list" [ngClass]="getConnectionClass()">
        <app-user *ngFor="let user of userService.users$ | async" [user]="user"></app-user>
      </div>
    </app-panel>
  `,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  connectionState;

  constructor(
    public socketService: SocketService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.socketService.getConnectionState()
      .subscribe((connectionState: boolean) => {
        this.connectionState = connectionState;
      });
  }

  getConnectionClass(): string {
    return this.connectionState ?
      'user-list--active' : 'user-list--inactive';
  }
}
