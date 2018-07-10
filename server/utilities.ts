import { User } from '@server/models/user.model';
import { SocketIOClient, SocketIOServer } from './socket';

const getSockets = (server: SocketIOServer): SocketIOClient[] => {
  const sockets = server.sockets.sockets;

  return Object.keys(sockets).map((key: string) => <SocketIOClient>sockets[key]);
};

export const getAllUsers = (socket: SocketIOServer): User[] => {
  const sockets = getSockets(socket);

  return sockets.map(({id, username}: SocketIOClient) => ({id, username}));
};
