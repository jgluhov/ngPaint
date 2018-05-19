import { Type } from '@angular/core';

export class Tool {
  constructor(
    public name: string,
    public component: Type<any>
  ) {}
}
