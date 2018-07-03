export enum SocketUserActionEnum {
  JOIN = 'user:join',
  JOINED = 'user:joined',
  LEFT = 'user:left'
}

export enum SocketEventEnum {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  ERROR = 'error'
}

export type SocketActions = SocketEventEnum | SocketUserActionEnum;
