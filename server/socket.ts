import { Observable } from 'rxjs/Observable';
import { Server } from 'http';
import * as io from 'socket.io';
import { of } from 'rxjs/observable/of';
import { fromEvent, merge } from 'rxjs';
import { SocketEventEnum, SocketCustomEventEnum } from './events';
import { switchMap, mergeMap, mapTo, map, takeUntil } from 'rxjs/operators';
import { User } from './models/user.model';

export type SocketIOServer = SocketIO.Server & NodeJS.EventEmitter;
export type SocketIOClient = SocketIO.Socket & User;

interface ServerSocket {
  server: SocketIOServer;
  client: SocketIOClient;
}
interface ServerSocketListener<T> extends ServerSocket {
  data: T;
}

export class SocketServer {
  private io$;
  private connection$;
  private disconnect$;

  constructor(private httpServer: Server) {
    this.io$ = of(io(httpServer));

    this.connection$ = this.io$
      .pipe(
        switchMap((server: SocketIOServer) => fromEvent(server, SocketEventEnum.CONNECTION)
          .pipe(map((client: SocketIO.Socket) => ({server, client}))))
      );

    this.disconnect$ = this.connection$
      .pipe(
        mergeMap((client: SocketIOClient) => fromEvent(client, SocketEventEnum.DISCONNECT)
          .pipe(mapTo(client))
      ));

    this.listen(SocketCustomEventEnum.SAVE_USERNAME).subscribe(this.handleSaveUsername);
  }

  private listen = <T>(event: string): Observable<ServerSocketListener<T>> => {
    return this.connection$
      .pipe(
        mergeMap(({server, client}: ServerSocket) => fromEvent(client, event)
          .pipe(
            takeUntil(fromEvent(client, SocketEventEnum.DISCONNECT)),
            map((data: T) => ({ server, client, data })
          )
      ))
    );
  }

  handleSaveUsername = ({server, client, data}: ServerSocketListener<string>): void => {
    server.sockets.sockets[client.id].username = data;
  }
}
