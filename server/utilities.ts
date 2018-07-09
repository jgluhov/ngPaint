import { User } from '@server/models/user.model';
import { UserSocket } from '@server/paint.server';

const getSockets = (socket: SocketIO.Socket): SocketIO.Socket[] => {
  if (!socket) {
    return [];
  }

  const sockets = socket.server.sockets.sockets;

  return Object.keys(sockets).map((key: string) => sockets[key]);
};

export const getAllUsers = (socket: SocketIO.Socket): User[] => {
  const sockets = getSockets(socket);

  return sockets.map(({id, username}: UserSocket) => ({id, username}));
};
