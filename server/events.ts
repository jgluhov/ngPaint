export enum SocketCustomEventEnum {
  JOIN = 'user:join',
  JOINED = 'user:joined',
  USER_LEFT = 'user left',
  ALL_USERS = 'all users',
  START_DRAWING = 'user:start-drawing',
  STOP_DRAWING = 'user:start-drawing'
}

export enum SocketEventEnum {
  CONNECT = 'connect',
  CONNECTION = 'connection',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error'
}

export type SocketEvents = SocketEventEnum | SocketCustomEventEnum;
