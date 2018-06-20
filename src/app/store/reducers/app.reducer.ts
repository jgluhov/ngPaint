import { Tool } from '@tools/types/tool';
import { Shape } from '@tools/shapes/shape';
import * as AppActions from '@store/actions/app.actions';

export interface App {
  selectedTool: Tool;
  selectedColor: string;
  hoveredShape: Shape;
  thickness: number;
  fontSize: number;
  shapes: Shape[];
}

const defaultState: App = {
  selectedTool: null,
  selectedColor: '#000000',
  hoveredShape: null,
  thickness: 2,
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
    case AppActions.CHANGE_HOVERED_SHAPE: {
      const shape = state.shapes.find((item: Shape) => item.id === action.payload.id);
      const hoveredShape = action.payload.state ? shape : null;

      return {
        ...state,
        hoveredShape
      };
    }
    case AppActions.CHANGE_THICKNESS: {
      return {
        ...state,
        thickness: action.payload
      };
    }
    default:
      return state;
  }
}
