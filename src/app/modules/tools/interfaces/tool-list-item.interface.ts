import {
  ToolTypeEnum,
  ToolGroupEnum,
  ToolCursorEnum,
  ToolThicknessEnum
} from '../enums';

export interface IToolListItem {
  type: ToolTypeEnum;
  group: ToolGroupEnum;
  shape: string;
  imageUrl: string;
  cursor: ToolCursorEnum;
  thickness: ToolThicknessEnum;
}
