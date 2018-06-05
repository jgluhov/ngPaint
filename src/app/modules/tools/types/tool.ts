import { ToolGroups, ToolTypes } from '@tools/types';

export interface Tool {
  type: ToolTypes;
  group: ToolGroups;
  shape: string;
  imageUrl: string;
}
