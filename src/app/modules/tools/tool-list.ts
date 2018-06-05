import { InjectionToken } from '@angular/core';
import { Tool, ToolGroups, ToolTypes } from './types';
import { SVGShapes } from './types/svg-shapes';

export type ToolList = Tool[];

export const toolList: Tool[] = [
  {
    type: ToolTypes.Pointer,
    group: ToolGroups.Default,
    shape: SVGShapes.None,
    imageUrl: 'assets/icons/pointer.svg'
  },
  {
    type: ToolTypes.Pencil,
    group: ToolGroups.Drawing,
    shape: SVGShapes.Polyline,
    imageUrl: 'assets/icons/pencil.svg'
  },
  {
    type: ToolTypes.Brush,
    group: ToolGroups.Drawing,
    shape: SVGShapes.Polyline,
    imageUrl: 'assets/icons/brush.svg'
  },
  {
    type: ToolTypes.Rect,
    group: ToolGroups.Geomentry,
    shape: SVGShapes.Rect,
    imageUrl: 'assets/icons/rect.svg'
  },
  {
    type: ToolTypes.Circle,
    group: ToolGroups.Geomentry,
    shape: SVGShapes.Circle,
    imageUrl: 'assets/icons/circle.svg'
  },
  {
    type: ToolTypes.Hand,
    group: ToolGroups.Control,
    shape: SVGShapes.None,
    imageUrl: 'assets/icons/hand.svg'
  }
];

export const TOOL_LIST_TOKEN = new InjectionToken<Tool[]>('toolList');
