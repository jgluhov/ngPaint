import { SocketCustomEventEnum, SocketEvents } from './socket.events';
import { User } from './models/user.model';

interface SocketAction {
  type: SocketEvents;
  payload: any;
}

export const userJoin = (user: User): SocketAction  => ({
  type: SocketCustomEventEnum.JOIN,
  payload: user
});
