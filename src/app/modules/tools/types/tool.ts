import { Type } from '@angular/core';

export interface Tool {
  name: string;
  component: Type<any>;
  shapeType: 'polyline';
  imageUrl: string;
}
