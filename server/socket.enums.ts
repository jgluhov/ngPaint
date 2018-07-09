export enum SocketUserActionEnum {
  JOIN = 'user:join',
  JOINED = 'user:joined',
  LEFT = 'user:left',
  ALL = 'user:all',
  START_DRAWING = 'user:start-drawing',
  STOP_DRAWING = 'user:start-drawing'
}

export enum SocketEventEnum {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error'
}

export enum SocketStateEnum {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected'
}

export type SocketActions = SocketEventEnum | SocketUserActionEnum;
