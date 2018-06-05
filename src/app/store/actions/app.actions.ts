import { Action } from '@ngrx/store';
import { Tool } from '@tools/types/tool';
import { Shape } from '@tools/shapes/shape';

export const SELECT_COLOR = '[Tools] Select color';
export const SELECT_TOOL = '[Tools] Select tool';
export const CREATE_SHAPE = '[Canvas] Create shape';
export const CHANGE_HOVERED_STATE = '[Shape] Change hovered state';
export const CHANGE_EDITING_STATE = '[Shape] Change editing state';
export const BLUR_SHAPE = '[Canvas] Blur shape';
export const CHANGE_THICKNESS = '[Adjustments] Change thickness';

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
  state: boolean;
}

export class ChangeHoveredState implements Action {
  readonly type = CHANGE_HOVERED_STATE;

  constructor(public payload: ChangeStatePayload) {}
}

export class ChangeEditingState implements Action {
  readonly type = CHANGE_EDITING_STATE;

  constructor(public payload: ChangeStatePayload) {
  }
}

export class ChangeThickness implements Action {
  readonly type = CHANGE_THICKNESS;

  constructor(public payload: number) {}
}

export type All =
  SelectColor |
  SelectTool |
  CreateShape |
  ChangeThickness |
  ChangeHoveredState |
  ChangeEditingState;
