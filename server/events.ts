export enum SocketCustomEventEnum {
  SAVE_USERNAME = 'save username',
  USER_JOIN = 'user join',
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
