import { Tool } from '@tools/types/tool';
import { Shape } from '@tools/shapes/shape';
import * as AppActions from '@store/actions/app.actions';

export interface App {
  selectedTool: Tool;
  selectedColor: string;
  fontSize: number;
  shapes: Shape[];
}

const defaultState: App = {
  selectedTool: null,
  selectedColor: '#000000',
  fontSize: 13,
  shapes: []
};

export function appReducer(state: App = defaultState, action: AppActions.All): App {
  switch (action.type) {
    case AppActions.SELECT_TOOL: {
      return {
        ...state,
        selectedTool: action.payload
      };
    }
    case AppActions.SELECT_COLOR: {
      return {
        ...state,
        selectedColor: action.payload
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
