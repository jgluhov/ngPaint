import { Tool } from '@tools/interfaces/tool.interface';

export interface AppState {
  common: {
    selectedColor: string;
    selectedTool: Tool;
  };
}
