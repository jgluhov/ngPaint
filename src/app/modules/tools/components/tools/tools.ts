import { InjectionToken } from '@angular/core';
import { PencilComponent } from '../pencil/pencil.component';
import { BrushComponent } from '../brush/brush.component';
import { Tool } from '@models/tool';

export const tools: Tool[] = [
  new Tool('pencil', PencilComponent),
  new Tool('brush', BrushComponent)
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
