import * as express from 'express';
import * as io from 'socket.io';
import { Server, createServer } from 'http';
import { User } from './models/user.model';
import { SocketUserActionEnum, SocketEventEnum } from './socket.enums';

type SocketListener = (...args: any[]) => void;

export class PaintServer {
  public static readonly PORT: number = 3000;
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
      socket.on(SocketUserActionEnum.ALL, this.handleUserAll(socket));
      socket.on(SocketUserActionEnum.JOIN, this.handleUserJoin(socket));
      socket.on(SocketEventEnum.DISCONNECT, this.handleUserDisconnect(socket));
    });
  }

  private handleUserAll = (socket: io.Socket): SocketListener =>
    (user: User): void => {
      socket.emit(SocketUserActionEnum.ALL, this.users);

      console.log('Users all', this.users);
    }

  private handleUserJoin = (socket: io.Socket): SocketListener =>
    (user: User): void => {
      user.socketId = socket.id;
      this.users.push(user);
      socket.broadcast.emit(SocketUserActionEnum.JOINED, user);

      console.log('User joined: ', user);
  }

  private handleUserDisconnect = (socket: io.Socket): SocketListener =>
    (): void => {
      const foundUser = this.users.find((user: User) => user.socketId === socket.id);
      this.users = this.users.filter((item: User) => item.id !== foundUser.id);

      socket.broadcast.emit(SocketUserActionEnum.LEFT, foundUser);

      console.log('User disconnected: ', this.users);
    }

  public getApp(): express.Application {
    return this.app;
  }
}
