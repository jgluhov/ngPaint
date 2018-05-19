import { Action } from '@ngrx/store';
import { Tool } from '@models/tool';

export const SELECT_COLOR = '[Tools] Select color';
export const SELECT_TOOL = '[Tools] Select tool';

export class SelectColor implements Action {
  readonly type = SELECT_COLOR;

  constructor(public payload: string) {}
}

export class SelectTool implements Action {
  readonly type = SELECT_TOOL;

  constructor(public payload: Tool) {}
}

export type All = SelectColor | SelectTool;
