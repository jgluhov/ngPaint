import { Component, Input } from '@angular/core';
import { User, UserStates } from '@server/models/user.model';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user',
  template: `
    <div class="user">
      <div class="user__icon" [ngClass]="userClass"></div>
      <div class="user__name">{{user.name}}</div>
      <span *ngIf="showYou()">(you)</span>
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

  showYou(): boolean {
    return this.userService.me.id === this.user.id;
  }

  showDrawing(): boolean {
    return this.user.state === UserStates.DRAWING;
  }
}
