import { SVGShapeEnum } from '../enums/svg-shape.enum';
import {
  ToolTypeEnum,
  ToolGroupEnum
} from '../enums';

export interface IToolListItem {
  type: ToolTypeEnum;
  group: ToolGroupEnum;
  shape: SVGShapeEnum;
  strokeWidth: number;
}
