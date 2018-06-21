import { InjectionToken } from '@angular/core';
import { Tool, ToolGroups, ToolTypes, ThicknessLines } from './types';
import { SVGShapes } from './types/svg-shapes';
import { CursorTypes } from '@tools/types/cursor-types';

export type ToolList = Tool[];

export const toolList: Tool[] = [
  {
    type: ToolTypes.Pointer,
    group: ToolGroups.Default,
    shape: SVGShapes.None,
    cursor: CursorTypes.Default,
    imageUrl: 'assets/icons/pointer.svg',
    thickness: ThicknessLines.THIN
  },
  {
    type: ToolTypes.Pencil,
    group: ToolGroups.Drawing,
    shape: SVGShapes.Polyline,
    cursor: CursorTypes.Pencil,
    imageUrl: 'assets/icons/pencil.svg',
    thickness: ThicknessLines.THIN
  },
  {
    type: ToolTypes.Brush,
    group: ToolGroups.Drawing,
    shape: SVGShapes.Polyline,
    cursor: CursorTypes.Circle,
    imageUrl: 'assets/icons/brush.svg',
    thickness: ThicknessLines.FAT
  },
  {
    type: ToolTypes.Rect,
    group: ToolGroups.Geomentry,
    shape: SVGShapes.Rect,
    cursor: CursorTypes.Crosshair,
    imageUrl: 'assets/icons/rect.svg',
    thickness: ThicknessLines.THIN
  },
  {
    type: ToolTypes.Circle,
    group: ToolGroups.Geomentry,
    shape: SVGShapes.Circle,
    cursor: CursorTypes.Crosshair,
    imageUrl: 'assets/icons/circle.svg',
    thickness: ThicknessLines.THIN
  },
  {
    type: ToolTypes.Hand,
    group: ToolGroups.Control,
    shape: SVGShapes.None,
    cursor: CursorTypes.Default,
    imageUrl: 'assets/icons/hand.svg',
    thickness: ThicknessLines.THIN
  }
];

export const TOOL_LIST_TOKEN = new InjectionToken<Tool[]>('toolList');
