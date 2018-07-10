import { User } from '@server/models/user.model';
import { SocketIOClient } from './socket';

const getSockets = (socket: SocketIO.Socket): SocketIO.Socket[] => {
  if (!socket) {
    return [];
  }

  const sockets = socket.server.sockets.sockets;

  return Object.keys(sockets).map((key: string) => sockets[key]);
};

export const getAllUsers = (socket: SocketIO.Socket): User[] => {
  const sockets = getSockets(socket);

  return sockets.map(({id, username}: SocketIOClient) => ({id, username}));
};
