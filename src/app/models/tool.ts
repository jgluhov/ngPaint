import { Type } from '@angular/core';

export interface ToolOptions {
  component: Type<any>;
  shape: Type<any>;
  imageUrl: string;
}

export class Tool {
  constructor(
    public name: string,
    public options: ToolOptions
  ) {}
}
