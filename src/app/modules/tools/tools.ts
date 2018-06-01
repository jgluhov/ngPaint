import { InjectionToken } from '@angular/core';
import { Tool } from '@tools/types/tool';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';
import { GeometryToolComponent } from './components/geometry-tool/geometry-tool.component';
import { ControlToolComponent } from './components/control-tool/control-tool.component';
import { Tools } from './types/tools';

export const tools: Tool[] = [
  {
    name: Tools.Pencil,
    component: DrawingToolComponent,
    shapeType: 'polyline',
    imageUrl: 'assets/icons/pencil.svg'
  },
  {
    name: Tools.Brush,
    component: DrawingToolComponent,
    shapeType: 'polyline',
    imageUrl: 'assets/icons/brush.svg'
  },
  {
    name: Tools.Rect,
    component: GeometryToolComponent,
    shapeType: 'rect',
    imageUrl: 'assets/icons/rect.svg'
  },
  {
    name: Tools.Circle,
    component: GeometryToolComponent,
    shapeType: 'circle',
    imageUrl: 'assets/icons/circle.svg'
  },
  {
    name: Tools.Hand,
    component: ControlToolComponent,
    shapeType: 'none',
    imageUrl: 'assets/icons/hand.svg'
  }
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
