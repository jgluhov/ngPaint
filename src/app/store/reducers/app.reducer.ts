import { AppState } from '../app-state';
import { Tool } from '@tools/types/tool';
import { Shape } from '@tools/shapes/shape';
import * as AppActions from '@store/actions/app.actions';
import { PolylineShape } from '@tools/shapes/polyline-shape';
import { CreateShape } from '../actions/app.actions';

export interface App {
  tool: Tool;
  color: string;
  fontSize: number;
  shapes: Shape[];
}

const defaultState: App = {
  tool: null,
  color: '#000000',
  fontSize: 13,
  shapes: []
};

export function appReducer(state: App = defaultState, action: AppActions.All): App {
  switch (action.type) {
    case AppActions.SELECT_TOOL: {
      return {
        ...state,
        tool: action.payload
      };
    }
    case AppActions.SELECT_COLOR: {
      return {
        ...state,
        color: action.payload
      };
    }
    case AppActions.CREATE_SHAPE: {
      return {
        ...state,
        shapes: [
          ...state.shapes,
          action.payload
        ]
      };
    }
    default:
      return state;
  }
}
