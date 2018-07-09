import * as express from 'express';
import { Server, createServer } from 'http';
import { SocketServer } from './socket';

export class HttpServer {
  public static readonly PORT: number = 3000;
  private app: express.Application;
  private server: Server;
  private socketServer: SocketServer;
  private port: number | string;

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
    this.port = process.env.PORT || HttpServer.PORT;
  }

  private createServer(): void {
    this.server = createServer(this.app);
  }

  private createSocket(): void {
    this.socketServer = new SocketServer(this.server);
  }

  private listen(): void {
    this.server.listen(this.port, () => {
      console.log('Running server on port %s', this.port);
    });
  }

  public getApp(): express.Application {
    return this.app;
  }
}
