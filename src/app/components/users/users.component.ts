import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  template: `
    <app-panel [panelTitle]="title">
    </app-panel>
  `
})
export class UsersComponent implements OnInit {
  title = 'Users';

  ngOnInit(): void {
  }

}
