import { Component, Input } from '@angular/core';
import { User } from '@interfaces/user.interface';
import { UserStates } from '@enums/user-states.enum';
import { UserService } from '@services/user/user.service';

@Component({
  selector: 'app-user',
  template: `
    <div class="user">
      <div class="user__icon" [ngClass]="userClass"></div>
      <div class="user__name">{{user.username}}</div>
      <span *ngIf="isMe()">(you)</span>
      <span *ngIf="isDrawing()"
        class="user__icon user__icon--drawing">
      </span>
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

  isDrawing(): boolean {
    return this.user.state === UserStates.DRAWING;
  }

  isMe(): boolean {
    return this.user.me;
  }
}
