import { Action } from '@ngrx/store';
import { Tool } from '@tools/types/tool';
import { Shape } from '@shapes/shape';
import { ShapeStates } from '@tools/types/shape-states';
import { CursorTypes } from '../../modules/tools/types/cursor-types';

export const SELECT_COLOR = '[Tools] Select color';
export const SELECT_TOOL = '[Tools] Select tool';
export const CREATE_SHAPE = '[Canvas] Create shape';
export const CHANGE_HOVERED_SHAPE = '[Shape] Change hovered shape';

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

export interface ChangeStatePayload {
  id: string;
  state: ShapeStates;
}

export class ChangeHoveredShape implements Action {
  readonly type = CHANGE_HOVERED_SHAPE;

  constructor(public payload: ChangeStatePayload) {}
}

export type All =
  SelectColor |
  SelectTool |
  CreateShape |
  ChangeHoveredShape;
