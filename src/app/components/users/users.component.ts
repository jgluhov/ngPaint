import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket/socket.service';
import { UserService } from '../../services/user/user.service';
import { User } from '@server/models/user.model';

@Component({
  selector: 'app-users',
  template: `
    <app-panel>
      <header>
        {{this.title}}
        <app-socket-state></app-socket-state>
      </header>
      <div class="user-list">
        <app-user *ngFor="let user of userService.users$ | async" [user]="user"></app-user>
      </div>
    </app-panel>
  `,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  title = 'Users';
  imageUrl;
  connectedUrl = 'assets/icons/socket-connected.svg';
  disconnectedUrl = 'assets/icons/socket-disconnected.svg';

  constructor(
    public socketService: SocketService,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.users$.subscribe((users: User[]) => {
      console.log(users);
    });
  }
}
