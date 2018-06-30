import * as express from 'express';
import { Server, createServer } from 'http';

export class NgPaintServer {
  public static readonly PORT: number = 8080;
  private app: express.Application;
  private server: Server;
  private port: number | string;

  constructor() {
    this.createApp();
    this.config();
    this.createServer();
    this.listen();
  }

  private createApp(): void {
    this.app = express();
  }

  private config(): void {
    this.port = process.env.PORT || NgPaintServer.PORT;
  }

  private createServer(): void {
    this.server = createServer(this.app);
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
