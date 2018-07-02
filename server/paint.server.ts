import * as express from 'express';
import * as io from 'socket.io';
import { Server, createServer } from 'http';
import { User } from './models';
import { SocketUserActionEnum, SocketEventEnum } from './socket.enums';
import { removeAllListeners } from 'cluster';

type SocketListener = (...args: any[]) => void;

export class PaintServer {
  public static readonly PORT: number = 8080;
  private app: express.Application;
  private server: Server;
  private io: SocketIO.Server;
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
    this.io = io(this.server);
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });

    this.io.on('connection', (socket: io.Socket) => {

      socket.on(SocketUserActionEnum.JOIN, this.handleUserJoin(socket));
      socket.on(SocketEventEnum.DISCONNECT, this.handleUserDisconnect(socket));
    });
  }

  private handleUserJoin = (socket: io.Socket): SocketListener =>
    (user: User): void => {
      this.users.push(user);
      socket.id = user.id;

      socket.broadcast.emit(SocketUserActionEnum.JOINED, { user });

      console.log('User joined: ', this.users);
  }

  private handleUserDisconnect = (socket: io.Socket): SocketListener =>
    (): void => {
      const foundUser = this.users.find((user: User) => user.id !== socket.id);
      this.users = this.users.filter((item: User) => item.id !== foundUser.id);

      socket.broadcast.emit(SocketUserActionEnum.LEFT, { user: foundUser });

      console.log('User disconnected: ', this.users);
    }

  public getApp(): express.Application {
    return this.app;
  }
}
