import { InjectionToken, Type } from '@angular/core';
import { PencilComponent } from '@tools/components/pencil/pencil.component';
import { BrushComponent } from '@tools/components/brush/brush.component';
import { Shape } from './shapes';
import { PolylineShape } from './shapes/polyline-shape';

export class Tool {
  constructor(
    public name: string,
    public component: Type<any>,
    public constructor: any,
    public imageUrl: string
  ) {}

  createShape(): Shape {
    return this.constructor.create();
  }
}

export const tools: Tool[] = [
  new Tool('pencil', PencilComponent, PolylineShape, 'assets/icons/pencil.svg'),
  new Tool('brush', BrushComponent, PolylineShape, 'assets/icons/brush.svg')
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
