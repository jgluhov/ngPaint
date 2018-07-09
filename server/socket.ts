import { Observable } from 'rxjs/Observable';
import { Server } from 'http';
import * as io from 'socket.io';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs';
import { SocketEventEnum } from './events';
import { switchMap, mergeMap, mapTo } from 'rxjs/operators';
import { User } from './models/user.model';

type SocketIOServer = SocketIO.Server & NodeJS.EventEmitter;
type UserSocket = SocketIO.Socket & User;
type SocketIOListener = (...args: any[]) => void;

export class SocketServer {
  private io$;
  private connection$;
  private disconnect$;

  constructor(private httpServer: Server) {
    this.io$ = of(io(httpServer));

    this.connection$ = this.io$
      .pipe(
        switchMap((server: SocketIOServer) => fromEvent(server, SocketEventEnum.CONNECTION))
      );

    this.disconnect$ = this.connection$
      .pipe(
        mergeMap((client: UserSocket) => fromEvent(client, SocketEventEnum.DISCONNECT)
          .pipe(mapTo(client))
      ));
  }
}
