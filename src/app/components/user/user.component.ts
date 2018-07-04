import { Component, Input } from '@angular/core';
import { User } from '@server/models/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  template: `
    <div class="user">
      <img class="user__avatar" [src]="_user.imageUrl" />
      <span class="user__name">{{_user.name}}</span>
      <span *ngIf="">(you)</span>
    </div>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  _user: User;
  constructor(private userService: UserService) {
  }
  @Input() set user(user: User) {
    this._user = user;
    this._user.imageUrl = this.getRandomUserImageUrl();
  }

  userImageUrl;

  getRandomUserImageUrl(): string {
    const randomIndex = Math.floor(Math.random() * 4) + 1;

    return `assets/icons/users/man-${randomIndex}.svg`;
  }

}
