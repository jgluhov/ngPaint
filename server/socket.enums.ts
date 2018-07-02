export enum SocketUserActionEnum {
  JOIN = 'user:join',
  JOINED = 'user:joined'
}

export enum SocketEventEnum {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

export type SocketActions = SocketEventEnum | SocketUserActionEnum;
