import { InjectionToken } from '@angular/core';
import { PencilComponent } from '@tools/components/pencil/pencil.component';
import { BrushComponent } from '@tools/components/brush/brush.component';
import { Tool } from '@models/tool';
import { Polyline } from '@models';

export const tools: Tool[] = [
  new Tool('pencil', {
    component: PencilComponent,
    shape: Polyline,
    imageUrl: 'assets/icons/pencil.svg'
  }),
  new Tool('brush', {
    component: BrushComponent,
    shape: Polyline,
    imageUrl: 'assets/icons/brush.svg'
  })
];

export const TOOLS_TOKEN = new InjectionToken<Tool[]>('tools');
