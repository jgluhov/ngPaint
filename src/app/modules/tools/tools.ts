import { InjectionToken } from '@angular/core';
import { Tool } from '@tools/types/tool';
import { DrawingToolComponent } from './components/drawing-tool/drawing-tool.component';
import { GeometryToolComponent } from './components/geometry-tool/geometry-tool.component';
import { ControlToolComponent } from './components/control-tool/control-tool.component';
import { PointerToolComponent } from './components/pointer-tool/pointer-tool.component';
import { Tools } from './types/tools';

export const tools: Tool[] = [
  {
    name: Tools.Pointer,
    component: PointerToolComponent,
    type: 'none',
    imageUrl: 'assets/icons/pointer.svg'
  },
  {
    name: Tools.Pencil,
    component: DrawingToolComponent,
    type: 'polyline',
    imageUrl: 'assets/icons/pencil.svg'
  },
  {
    name: Tools.Brush,
    component: DrawingToolComponent,
    type: 'polyline',
    imageUrl: 'assets/icons/brush.svg'
  },
  {
    name: Tools.Rect,
    component: GeometryToolComponent,
    type: 'rect',
    imageUrl: 'assets/icons/rect.svg'
  },
  {
    name: Tools.Circle,
    component: GeometryToolComponent,
    type: 'circle',
    imageUrl: 'assets/icons/circle.svg'
  },
  {
    name: Tools.Hand,
    component: ControlToolComponent,
    type: 'none',
    imageUrl: 'assets/icons/hand.svg'
  }
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
