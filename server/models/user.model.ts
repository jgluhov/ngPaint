import { generateId } from '../helpers';

export interface User {
  id: string;
  socketId?: string;
  name: string;
  imageUrl?: string;
}

export const createUser = (name: string): User => {
  return {
    id: generateId(),
    name
  };
};
