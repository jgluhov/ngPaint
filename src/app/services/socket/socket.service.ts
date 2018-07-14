import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, merge, fromEvent, of } from 'rxjs';
import { mapTo, switchMap, map, mergeMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import {
  SocketCustomEventEnum,
  SocketEvents,
  SocketEventEnum
} from '@server/events';
import { UserService } from '@services/user/user.service';
import { User } from '@server/models/user.model';
import { Socket } from 'socket.io';

interface SocketIOMessage<T> {
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

    this.listen(SocketCustomEventEnum.ALL_USERS).pipe(withLatestFrom(this.socket$)).subscribe(this.handleAllUsers);
    this.listen(SocketCustomEventEnum.USER_LEFT).subscribe(this.handleUserLeft);
    this.listen(SocketCustomEventEnum.USER_JOIN).subscribe(this.handleUserJoin);

    this.send(this.userService.username$, SocketCustomEventEnum.SAVE_USERNAME);
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
        mergeMap((socket: SocketIO.Socket) => {
          return data$.pipe(
            map(((data: T): SocketIOMessage<T> => ({socket, data}))),
            takeUntil(this.disconnect$)
          );
        })
      )
      .subscribe(({socket, data}: SocketIOMessage<T>) => {
        socket.emit(event, data);
      });
  }

  private handleAllUsers = ([users, socket]: [User[], SocketIO.Socket]): void => {
    this.identifying(socket, users);
    this.userService.clear();
    this.userService.add(...users);
  }

  private handleUserLeft = (user: User): void => {
    this.userService.remove(user.id);
  }

  private handleUserJoin = (user: User): void => {
    this.userService.add(user);
  }

  public getConnectionState(): Observable<boolean> {
    return this.connectionState$;
  }

  public identifying(socket: SocketIO.Socket, users: User[]): void {
    users.forEach((user: User) => {
      user.me = user.id === socket.id;
    })
  }
}
