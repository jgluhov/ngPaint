import { AppState } from '../app-state';
import * as AppActions from '../actions/app.actions';
import { Tool } from '@models/tool';

export interface App {
  tool: Tool;
  color: string;
  fontSize: number;
}

const defaultState: App = {
  tool: null,
  color: '#ffffff',
  fontSize: 13
};

export function appReducer(state: App = defaultState, action: AppActions.All): App {
  switch (action.type) {
    case AppActions.SELECT_TOOL: {
      return {
        ...state,
        tool: action.payload
      };
    }
    default:
      return state;
  }
}
