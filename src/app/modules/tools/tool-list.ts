import { InjectionToken } from '@angular/core';
import { IToolList } from '@tools/interfaces';
import {
  ToolTypeEnum,
  ToolGroupEnum,
  SVGShapeEnum,
  ToolCursorEnum,
  ToolThicknessEnum
} from '@tools/enums';

export const toolList: IToolList = [
  {
    type: ToolTypeEnum.Pointer,
    group: ToolGroupEnum.Default,
    shape: SVGShapeEnum.None,
    cursor: ToolCursorEnum.Default,
    imageUrl: 'assets/icons/pointer.svg',
    thickness: ToolThicknessEnum.THIN
  },
  {
    type: ToolTypeEnum.Pencil,
    group: ToolGroupEnum.Drawing,
    shape: SVGShapeEnum.Polyline,
    cursor: ToolCursorEnum.Pencil,
    imageUrl: 'assets/icons/pencil.svg',
    thickness: ToolThicknessEnum.THIN
  },
  {
    type: ToolTypeEnum.Brush,
    group: ToolGroupEnum.Drawing,
    shape: SVGShapeEnum.Polyline,
    cursor: ToolCursorEnum.Circle,
    imageUrl: 'assets/icons/brush.svg',
    thickness: ToolThicknessEnum.FAT
  },
  {
    type: ToolTypeEnum.Rect,
    group: ToolGroupEnum.Geomentry,
    shape: SVGShapeEnum.Rect,
    cursor: ToolCursorEnum.Crosshair,
    imageUrl: 'assets/icons/rect.svg',
    thickness: ToolThicknessEnum.THIN
  },
  {
    type: ToolTypeEnum.Circle,
    group: ToolGroupEnum.Geomentry,
    shape: SVGShapeEnum.Circle,
    cursor: ToolCursorEnum.Crosshair,
    imageUrl: 'assets/icons/circle.svg',
    thickness: ToolThicknessEnum.THIN
  },
  {
    type: ToolTypeEnum.Hand,
    group: ToolGroupEnum.Control,
    shape: SVGShapeEnum.None,
    cursor: ToolCursorEnum.Default,
    imageUrl: 'assets/icons/hand.svg',
    thickness: ToolThicknessEnum.THIN
  }
];

export const TOOL_LIST_TOKEN = new InjectionToken<IToolList>('toolList');
