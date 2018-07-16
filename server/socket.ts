import { Observable } from 'rxjs/Observable';
import { Server } from 'http';
import * as io from 'socket.io';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs';
import { SocketEventEnum, SocketCustomEventEnum } from './events';
import { switchMap, mergeMap, mapTo, map, takeUntil } from 'rxjs/operators';
import { getAllUsers } from './utilities';
import { UserStates } from '@server/models/user.model';
import { Shape } from '@tools/shapes/shape';

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
    this.listen(SocketCustomEventEnum.CHANGE_STATE).subscribe(this.handleChangeState);
    this.listen(SocketCustomEventEnum.SAVE_SHAPE).subscribe(this.handleSaveShape);
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

  private handleChangeState = ({server, client, data}: SocketIOListener<UserStates>): void => {
    const message = {
      id: client.id,
      message: data
    };

    client.emit(SocketCustomEventEnum.CHANGE_STATE, message);
    client.broadcast.emit(SocketCustomEventEnum.CHANGE_STATE, message);
  }

  private handleSaveShape = ({server, client, data}: SocketIOListener<Shape>): void => {
    const message = {
      id: client.id,
      message: data
    };

    client.broadcast.emit(SocketCustomEventEnum.SHAPE_ADD, message);
  }

  private handleUserLeft = (client: SocketIOClient): void => {
    client.broadcast.emit(SocketCustomEventEnum.USER_LEFT, {
      id: client.id
    });
  }
}
