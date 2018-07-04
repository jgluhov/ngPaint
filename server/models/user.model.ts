import { generateId } from '../helpers';

export interface User {
  id: string;
  name: string;
  address?: string;
  imageUrl?: string;
}

export const createUser = (name: string): User => {
  return {
    id: generateId(),
    name
  };
};
