import { InjectionToken } from '@angular/core';
import { IToolList } from '@tools/interfaces';
import {
  ToolTypeEnum,
  ToolGroupEnum,
  SVGShapeEnum,
  ToolCursorEnum
} from '@tools/enums';

import {
  SHAPE_DEFAULT_STROKE_WIDTH,
  SHAPE_THICK_STROKE_WIDTH
} from './tool-options';

export const toolList: IToolList = [
  {
    type: ToolTypeEnum.Pointer,
    group: ToolGroupEnum.Default,
    shape: SVGShapeEnum.None,
    cursor: ToolCursorEnum.Default,
    imageUrl: 'assets/icons/pointer.svg',
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Pencil,
    group: ToolGroupEnum.Drawing,
    shape: SVGShapeEnum.Polyline,
    cursor: ToolCursorEnum.Pencil,
    imageUrl: 'assets/icons/pencil.svg',
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Brush,
    group: ToolGroupEnum.Drawing,
    shape: SVGShapeEnum.Polyline,
    cursor: ToolCursorEnum.Circle,
    imageUrl: 'assets/icons/brush.svg',
    strokeWidth: SHAPE_THICK_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Rect,
    group: ToolGroupEnum.Geomentry,
    shape: SVGShapeEnum.Rect,
    cursor: ToolCursorEnum.Crosshair,
    imageUrl: 'assets/icons/rect.svg',
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Circle,
    group: ToolGroupEnum.Geomentry,
    shape: SVGShapeEnum.Circle,
    cursor: ToolCursorEnum.Crosshair,
    imageUrl: 'assets/icons/circle.svg',
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Hand,
    group: ToolGroupEnum.Control,
    shape: SVGShapeEnum.None,
    cursor: ToolCursorEnum.Hand,
    imageUrl: 'assets/icons/hand.svg',
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  }
];

export const TOOL_LIST_TOKEN = new InjectionToken<IToolList>('toolList');
