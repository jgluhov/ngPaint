import { Action } from '@ngrx/store';
import { Tool } from '@tools/types/tool';
import { Shape } from '@tools/shapes/shape';

export const SELECT_COLOR = '[Tools] Select color';
export const SELECT_TOOL = '[Tools] Select tool';
export const CREATE_SHAPE = '[Canvas] Create shape';

export class SelectColor implements Action {
  readonly type = SELECT_COLOR;

  constructor(public payload: string) {}
}

export class SelectTool implements Action {
  readonly type = SELECT_TOOL;

  constructor(public payload: Tool) {}
}

export class CreateShape implements Action {
  readonly type = CREATE_SHAPE;

  constructor(public payload: Shape) {}
}

export type All = SelectColor | SelectTool | CreateShape;
