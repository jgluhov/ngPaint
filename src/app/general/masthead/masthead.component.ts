import { Component } from '@angular/core';

@Component({
  selector: 'app-masthead',
  template: `
    <div class="masthead">
      <div class="masthead__logo">Angular<b>Paint</b></div>
    </div>
  `,
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent {

  constructor() { }

}
