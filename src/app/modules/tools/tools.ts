import { InjectionToken } from '@angular/core';
import { Tool, Tools } from './types';
import {
  DrawingToolComponent,
  GeometryToolComponent,
  ControlToolComponent,
  PointerToolComponent
} from './components';

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
