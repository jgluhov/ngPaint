import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <app-panel [panelTitle]="title">
      <div>user 1</div>
      <div>user 2</div>
      <div>user 1</div>
      <div>user 2</div>
      <div>user 1</div>
      <div>user 2</div>
      <div>user 1</div>
      <div>user 2</div>
      <div>user 1</div>
      <div>user 2</div>
      <div>user 1</div>
      <div>user 2</div>
      <div>user 1</div>
      <div>user 2</div>
    </app-panel>
  `
})
export class UsersComponent implements OnInit {
  title = 'Users';

  ngOnInit(): void {
  }

}
