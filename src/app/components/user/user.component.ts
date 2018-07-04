import { Component, Input } from '@angular/core';
import { User } from '@server/models/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  template: `
    <div class="user">
      <div class="user__icon {{userClass}}"></div>
      <div class="user__name">{{user.name}}</div>
      <span *ngIf="isMe()">(you)</span>
    </div>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  @Input() user: User;
  userClass: string;

  constructor(private userService: UserService) {
    this.userClass = this.getRandomUserClass();
  }

  getRandomUserClass(): string {
    const randomIndex = Math.floor(Math.random() * 4) + 1;

    return `user__icon--${randomIndex}`;
  }

  isMe(): boolean {
    return this.userService.isMe(this.user);
  }
}
