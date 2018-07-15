export enum UserStates {
  IDLE = 'idle',
  DRAWING = 'drawing'
}

export interface User {
  id: string;
  username?: string;
  state?: string;
  me?: boolean;
}
