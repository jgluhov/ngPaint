import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <app-panel [panelTitle]="title">
      <div>User 1</div>
      <div>User 1</div>
      <div>User 1</div>
      <div>User 1</div>
      <div>User 1</div>
      <div>User 1</div>
      <div>User 1</div>
      <div>User 1</div>
      <div>User 1</div>
    </app-panel>
  `
})
export class UsersComponent implements OnInit {
  title = 'Users';

  ngOnInit(): void {
  }

}
