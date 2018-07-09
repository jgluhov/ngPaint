import * as express from 'express';
import * as io from 'socket.io';
import { Server, createServer } from 'http';
import { User } from './models/user.model';
import {
  SocketCustomEventEnum,
  SocketEventEnum
} from './socket.events';
import { of, Observable, fromEvent } from 'rxjs';
import { switchMap, map, mergeMap, mapTo } from 'rxjs/operators';

type SocketIOListener = (...args: any[]) => void;
type SocketIOServer = SocketIO.Server & NodeJS.EventEmitter;
interface SocketIOAllSockets {
  [id: string]: SocketIO.Socket;
}

export class PaintServer {
  public static readonly PORT: number = 3000;
  private app: express.Application;
  private server: Server;
  private io$;
  private connection$: Observable<SocketIO.Socket>;
  private disconnect$: Observable<SocketIO.Socket>;
  private port: number | string;
  private users: User[] = [];

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.createSocket();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
  }

  private config(): void {
    this.port = process.env.PORT || PaintServer.PORT;
  }

  private createServer(): void {
    this.server = createServer(this.app);
  }

  private createSocket(): void {
    this.io$ = of(io(this.server));

    this.connection$ = this.io$
      .pipe(
        switchMap((server: SocketIOServer) => fromEvent(server, SocketEventEnum.CONNECTION))
      );

    this.disconnect$ = this.connection$
      .pipe(
        mergeMap((client: SocketIO.Socket) => fromEvent(client, SocketEventEnum.DISCONNECT)
          .pipe(mapTo(client))
      ));
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.connection$.subscribe((client: SocketIO.Socket) => {
      const sockets = this.queryAllSockets(client);
      console.log('connection');
    });

    this.disconnect$.subscribe(() => {
      console.log('disconnect');
    });
  }

  // private handleUserAll = (socket: io.Socket): SocketListener =>
  //   (user: User): void => {
  //     socket.emit(SocketCustomEventEnum.ALL, this.users);

  //     console.log('Users all', this.users);
  //   }

  // private handleUserJoin = (socket: io.Socket): SocketListener =>
  //   (user: User): void => {
  //     user.socketId = socket.id;
  //     this.users.push(user);
  //     socket.broadcast.emit(SocketCustomEventEnum.JOINED, user);

  //     console.log('User joined: ', user);
  // }

  // private handleUserDisconnect = (socket: io.Socket): SocketListener =>
  //   (): void => {
  //     const foundUser = this.users.find((user: User) => user.socketId === socket.id);
  //     this.users = this.users.filter((item: User) => item.id !== foundUser.id);

  //     socket.broadcast.emit(SocketCustomEventEnum.LEFT, foundUser);

  //     console.log('User disconnected: ', this.users);
  //   }

  private queryAllSockets(socket: SocketIO.Socket): SocketIOAllSockets {
    return socket.server.sockets.sockets;
  }

  public getApp(): express.Application {
    return this.app;
  }
}
