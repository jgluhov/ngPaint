import { Type } from '@angular/core';

export interface Tool {
  name: string;
  component: Type<any>;
  type: string;
  imageUrl: string;
}
