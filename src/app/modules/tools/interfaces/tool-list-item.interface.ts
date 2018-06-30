import {
  ToolTypeEnum,
  ToolGroupEnum,
  ToolCursorEnum
} from '../enums';

export interface IToolListItem {
  type: ToolTypeEnum;
  group: ToolGroupEnum;
  shape: string;
  imageUrl: string;
  cursor: ToolCursorEnum;
  strokeWidth: number;
}
