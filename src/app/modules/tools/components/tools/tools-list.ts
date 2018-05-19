import { InjectionToken } from '@angular/core';
import { PencilComponent } from '../pencil/pencil.component';
import { BrushComponent } from '../brush/brush.component';
import { Tool } from '@models/tool';

export const toolList: Tool[] = [
  new Tool('pencil', PencilComponent),
  new Tool('brush', BrushComponent)
];

export const TOOL_LIST_TOKEN = new InjectionToken<Tool[]>('toolList');
