export enum SocketUserActionEnum {
  JOIN = 'user:join',
  JOINED = 'user:joined',
  LEFT = 'user:left'
}

export enum SocketEventEnum {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error'
}

export type SocketActions = SocketEventEnum | SocketUserActionEnum;
