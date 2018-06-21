import { ToolGroups, ToolTypes } from '@tools/types';
import { CursorTypes } from '@tools/types/cursor-types';
import { ThicknessLines } from '@tools/types/thickness-lines';

export interface Tool {
  type: ToolTypes;
  group: ToolGroups;
  shape: string;
  imageUrl: string;
  cursor: CursorTypes;
  thickness: ThicknessLines;
}
