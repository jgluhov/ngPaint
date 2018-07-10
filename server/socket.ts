import { Observable } from 'rxjs/Observable';
import { Server } from 'http';
import * as io from 'socket.io';
import { of } from 'rxjs/observable/of';
import { fromEvent, merge } from 'rxjs';
import { SocketEventEnum, SocketCustomEventEnum } from './events';
import { switchMap, mergeMap, mapTo, map, takeUntil } from 'rxjs/operators';
import { User } from './models/user.model';
import { getAllUsers } from './utilities';

export type SocketIOServer = SocketIO.Server & NodeJS.EventEmitter;
export type SocketIOClient = SocketIO.Socket & { username: string };

interface SocketIOConnect {
  server: SocketIOServer;
  client: SocketIOClient;
}

interface SocketIOListener<T> extends SocketIOConnect {
  data: T;
}

export class SocketServer {
  private io$;
  private connection$: Observable<SocketIOConnect>;
  private disconnect$: Observable<SocketIOClient>;

  constructor(private httpServer: Server) {
    this.io$ = of(io(httpServer));

    this.connection$ = this.io$
      .pipe(
        switchMap((server: SocketIOServer) => fromEvent(server, SocketEventEnum.CONNECTION)
          .pipe(map((client: SocketIOClient) => ({server, client}))))
      );

    this.disconnect$ = this.connection$
      .pipe(
        mergeMap(({server, client}: SocketIOConnect) => fromEvent(client, SocketEventEnum.DISCONNECT)
          .pipe(mapTo(client))
      ));

    this.listen(SocketCustomEventEnum.SAVE_USERNAME).subscribe(this.handleSaveUsername);
    this.disconnect$.subscribe(this.handleUserLeft);
  }

  private listen = <T>(event: string): Observable<SocketIOListener<T>> => {
    return this.connection$
      .pipe(
        mergeMap(({server, client}: SocketIOConnect) => fromEvent(client, event)
          .pipe(
            takeUntil(fromEvent(client, SocketEventEnum.DISCONNECT)),
            map((data: T) => ({ server, client, data })
          )
      ))
    );
  }

  private handleSaveUsername = ({server, client, data}: SocketIOListener<string>): void => {
    (<SocketIOClient>server.sockets.sockets[client.id]).username = data;

    client.emit(SocketCustomEventEnum.ALL_USERS, getAllUsers(server));
    client.broadcast.emit(SocketCustomEventEnum.USER_JOIN, {
      id: client.id,
      username: data
    });
  }

  private handleUserLeft = (client: SocketIOClient): void => {
    client.broadcast.emit(SocketCustomEventEnum.USER_LEFT, {
      id: client.id
    });
  }
}
