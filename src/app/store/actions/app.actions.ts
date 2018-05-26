import { Action } from '@ngrx/store';
import { Tool } from '@tools/tools';
import { PolylineShape } from '@tools/shapes/polyline-shape';

export const SELECT_COLOR = '[Tools] Select color';
export const SELECT_TOOL = '[Tools] Select tool';
export const CREATE_POLYLINE = '[Canvas] Create polyline';

export class SelectColor implements Action {
  readonly type = SELECT_COLOR;

  constructor(public payload: string) {}
}

export class SelectTool implements Action {
  readonly type = SELECT_TOOL;

  constructor(public payload: Tool) {}
}

export class CreatePolyline implements Action {
  readonly type = CREATE_POLYLINE;

  constructor(public payload: PolylineShape) {}
}

export type All = SelectColor | SelectTool | CreatePolyline;
