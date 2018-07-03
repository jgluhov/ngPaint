import { Component, OnInit, Input } from '@angular/core';
import { User } from '@server/models/user.model';

@Component({
  selector: 'app-user',
  template: `
    {{user.name}}
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  constructor() { }

  ngOnInit(): void {
  }

  getRandomUserImageUrl(): string {
    const randomIndex = Math.floor(Math.random() * 4) + 1;

    return `assets/icons/users/man-${randomIndex}.svg`;
  }

}
