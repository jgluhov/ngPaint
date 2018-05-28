import { InjectionToken } from '@angular/core';
import { Shape } from './shapes';
import { PolylineShape } from './shapes/polyline-shape';
import { Tool } from '@tools/types/tool';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';

export const tools: Tool[] = [
  {
    name: 'pencil',
    component: DrawingToolComponent,
    shapeType: 'polyline',
    imageUrl: 'assets/icons/pencil.svg'
  },
  {
    name: 'brush',
    component: DrawingToolComponent,
    shapeType: 'polyline',
    imageUrl: 'assets/icons/brush.svg'
  }
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
