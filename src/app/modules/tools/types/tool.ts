import { ToolGroups } from '@tools/types';

export interface Tool {
  name: string;
  group: ToolGroups;
  shape: string;
  imageUrl: string;
}
