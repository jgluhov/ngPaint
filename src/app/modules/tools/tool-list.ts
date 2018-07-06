import { InjectionToken } from '@angular/core';
import { IToolList } from '@tools/interfaces';
import {
  ToolTypeEnum,
  ToolGroupEnum,
  SVGShapeEnum
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
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Pencil,
    group: ToolGroupEnum.Drawing,
    shape: SVGShapeEnum.Polyline,
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Brush,
    group: ToolGroupEnum.Drawing,
    shape: SVGShapeEnum.Polyline,
    strokeWidth: SHAPE_THICK_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Rect,
    group: ToolGroupEnum.Geomentry,
    shape: SVGShapeEnum.Rect,
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Circle,
    group: ToolGroupEnum.Geomentry,
    shape: SVGShapeEnum.Circle,
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  },
  {
    type: ToolTypeEnum.Hand,
    group: ToolGroupEnum.Control,
    shape: SVGShapeEnum.None,
    strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
  }
];

export const TOOL_LIST_TOKEN = new InjectionToken<IToolList>('toolList');
