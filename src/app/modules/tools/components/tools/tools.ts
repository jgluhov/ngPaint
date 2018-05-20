import { InjectionToken } from '@angular/core';
import { PencilComponent } from '../pencil/pencil.component';
import { BrushComponent } from '../brush/brush.component';
import { Tool } from '@models/tool';

export const tools: Tool[] = [
  new Tool('pencil', {
    component: PencilComponent,
    imageUrl: 'assets/icons/pencil.svg'
  }),
  new Tool('brush', {
    component: BrushComponent,
    imageUrl: 'assets/icons/brush.svg'
  })
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
