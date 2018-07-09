import { generateId } from '../helpers';

export enum UserStates {
  IDLE = 'idle',
  DRAWING = 'drawing'
}

export interface User {
  id: string;
  socketId?: string;
  name: string;
  state?: string;
}

export const createUser = (name: string): User => {
  return {
    id: generateId(),
    name
  };
};
