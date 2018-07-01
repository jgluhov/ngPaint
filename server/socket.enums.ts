export enum SocketUserActionEnum {
  JOIN = 'user:join'
}

export enum SocketEventEnum {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect'
}

export type SocketActions = SocketEventEnum | SocketUserActionEnum;
