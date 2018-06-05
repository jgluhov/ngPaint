import { InjectionToken } from '@angular/core';
import { Tool, Tools, ToolGroups } from './types';

export const tools: Tool[] = [
  {
    name: Tools.Pointer,
    group: ToolGroups.Default,
    shape: 'none',
    imageUrl: 'assets/icons/pointer.svg'
  },
  {
    name: Tools.Pencil,
    group: ToolGroups.Drawing,
    shape: 'polyline',
    imageUrl: 'assets/icons/pencil.svg'
  },
  {
    name: Tools.Brush,
    group: ToolGroups.Drawing,
    shape: 'polyline',
    imageUrl: 'assets/icons/brush.svg'
  },
  {
    name: Tools.Rect,
    group: ToolGroups.Geomentry,
    shape: 'rect',
    imageUrl: 'assets/icons/rect.svg'
  },
  {
    name: Tools.Circle,
    group: ToolGroups.Geomentry,
    shape: 'circle',
    imageUrl: 'assets/icons/circle.svg'
  },
  {
    name: Tools.Hand,
    group: ToolGroups.Control,
    shape: 'none',
    imageUrl: 'assets/icons/hand.svg'
  }
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
