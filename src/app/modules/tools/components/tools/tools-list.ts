import { InjectionToken, Type } from '@angular/core';
import { PencilComponent } from '../pencil/pencil.component';
import { BrushComponent } from '../brush/brush.component';

export interface Tool {
  name: string;
  component: Type<any>;
}

export const toolList: Tool[] = [
  {
    name: 'pencil',
    component: PencilComponent
  },
  {
    name: 'brush',
    component: BrushComponent
  }
];

export const TOOL_LIST_TOKEN = new InjectionToken<Tool[]>('toolList');
