import { InjectionToken, Type } from '@angular/core';
import { PencilComponent } from '@tools/components/pencil/pencil.component';
import { BrushComponent } from '@tools/components/brush/brush.component';
import { Shape } from './shapes';
import { PolylineShape } from './shapes/polyline-shape';

export interface Tool {
  name: string;
  component: Type<any>;
  shape: Type<Shape>;
  imageUrl: string;
}

export const tools: Tool[] = [
  {
    name: 'pencil',
    component: PencilComponent,
    shape: PolylineShape,
    imageUrl: 'assets/icons/pencil.svg'
  },
  {
    name: 'brush',
    component: BrushComponent,
    shape: PolylineShape,
    imageUrl: 'assets/icons/brush.svg'
  }
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
