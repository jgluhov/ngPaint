import { InjectionToken } from '@angular/core';
import { PencilComponent } from '@tools/components/pencil/pencil.component';
import { BrushComponent } from '@tools/components/brush/brush.component';
import { Shape } from './shapes';
import { PolylineShape } from './shapes/polyline-shape';
import { Tool } from '@tools/types/tool';

export const tools: Tool[] = [
  {
    name: 'pencil',
    component: PencilComponent,
    shapeType: 'polyline',
    imageUrl: 'assets/icons/pencil.svg'
  },
  {
    name: 'brush',
    component: BrushComponent,
    shapeType: 'polyline',
    imageUrl: 'assets/icons/brush.svg'
  }
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
