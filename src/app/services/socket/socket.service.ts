import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, merge, fromEvent, of } from 'rxjs';
import { mapTo, switchMap, map, mergeMap, takeUntil } from 'rxjs/operators';
import {
  SocketCustomEventEnum,
  SocketEvents,
  SocketEventEnum
} from '@server/events';
import { UserService } from '@services/user/user.service';
import { User } from '@server/models/user.model';
import { Socket } from 'socket.io';

interface SocketSendFormat<T> {
  socket: SocketIO.Socket;
  data: T;
}

export enum SocketStateEnum {
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected'
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket$;
  private connect$;
  private disconnect$;
  private connectionState$;
  constructor(private userService: UserService) {
  }

  public connect(): void {
    this.socket$ = of(io.connect(environment.wsUrl));

    this.connect$ = this.socket$.pipe(
      switchMap((socket: Socket) =>
        fromEvent(socket, SocketEventEnum.CONNECT)
          .pipe(map(() => socket))
      )
    );

    this.disconnect$ = this.socket$.pipe(
      switchMap((socket: Socket) =>
        fromEvent(socket, SocketEventEnum.DISCONNECT)
      )
    );

    this.connectionState$ = merge(
      this.connect$.pipe(mapTo(SocketStateEnum.CONNECTED)),
      this.disconnect$.pipe(mapTo(SocketStateEnum.DISCONNECTED))
    );

    this.listen<User[]>(SocketCustomEventEnum.ALL_USERS)
      .subscribe((users: User[]) => {
        this.userService.clear();
        this.userService.add(...users);
      });

    this.listen<string>(SocketCustomEventEnum.USER_LEFT)
      .subscribe((id: string) => {
        this.userService.remove(id);
      });

    this.send(of('jgluhov'), SocketCustomEventEnum.JOIN);
  }

  private listen<T>(event: string): Observable<T> {
    return this.connect$
      .pipe(
        mergeMap((socket: Socket) => fromEvent(socket, event)),
        takeUntil(this.disconnect$)
    );
  }

  private send = <T>(data$: Observable<T>, event: string): void => {
    this.connect$
      .pipe(
        mergeMap((socket: SocketIO.Socket) => data$
          .pipe(
            map(((data: T): SocketSendFormat<T> => ({socket, data}))),
            takeUntil(this.disconnect$)
          )
        )
      )
      .subsribe(({socket, data}: SocketSendFormat<T>) => socket.emit(event, data));
  }

  public getConnectionState(): Observable<boolean> {
    return this.connectionState$;
  }
}
