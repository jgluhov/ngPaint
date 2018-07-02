import * as express from 'express';
import * as io from 'socket.io';
import { Server, createServer } from 'http';
import { User } from './models';
import { SocketUserActionEnum } from './socket.enums';

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
    });
  }

  private handleUserJoin = (socket: io.Socket): SocketListener =>
    (username: string): void => {
      const user = new User(username);
      this.users.push(user);

      socket.broadcast.emit(SocketUserActionEnum.JOINED, {
        users: this.users
      });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
