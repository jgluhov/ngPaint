import { generateId } from '../helpers';
export class User {
  id = generateId();
  constructor(public username: string) {}
}
