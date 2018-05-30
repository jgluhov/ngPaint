import { InjectionToken } from '@angular/core';
import { Tool } from '@tools/types/tool';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';
import { GeometryToolComponent } from './components/geometry-tool/geometry-tool.component';

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
  },
  {
    name: 'rect',
    component: GeometryToolComponent,
    shapeType: 'rect',
    imageUrl: 'assets/icons/rect.svg'
  },
  {
    name: 'circle',
    component: GeometryToolComponent,
    shapeType: 'circle',
    imageUrl: 'assets/icons/circle.svg'
  }
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
