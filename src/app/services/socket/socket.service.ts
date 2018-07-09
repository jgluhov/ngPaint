import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, merge, fromEvent, of } from 'rxjs';
import { mapTo, switchMap, map, mergeMap, takeUntil } from 'rxjs/operators';
import {
  SocketUserActionEnum,
  SocketActions,
  SocketEventEnum,
  SocketStateEnum
} from '@server/socket.enums';
import { UserService } from '@services/user/user.service';
import { User } from '@server/models/user.model';
import { Socket } from 'socket.io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket$;
  private connect$;
  private disconnect$;
  private connectionState$;


  private socket;
  private disconnects$;
  private connects$;
  private joins$;
  private lefts$;
  private state$;
  private all$;
  public connectionEstablished$;

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

    // this.connects$ = fromEvent(this.socket, SocketEventEnum.CONNECT);
    // this.disconnects$ = fromEvent(this.socket, SocketEventEnum.DISCONNECT);
    // this.joins$ = fromEvent(this.socket, SocketUserActionEnum.JOINED);
    // this.lefts$ = fromEvent(this.socket, SocketUserActionEnum.LEFT);
    // this.all$ = fromEvent(this.socket, SocketUserActionEnum.ALL);

    // this.connects$.subscribe(() => {
    //   this.socket.emit(SocketUserActionEnum.JOIN, this.userService.me);
    //   this.socket.emit(SocketUserActionEnum.ALL);
    // });

    // this.all$.subscribe((users: User[]) => {
    //   this.userService.clear();
    //   this.userService.add(...users);
    // });

    // this.joins$.subscribe((user: User) => {
    //   this.userService.add(user);
    // });

    // this.lefts$.subscribe((user: User) => {
    //   this.userService.remove(user);
    // });
  }

  private listen(event: string): Observable<string> {
    return this.connect$
      .pipe(
        mergeMap((socket: Socket) => fromEvent(socket, event)),
        takeUntil(this.disconnect$)
    );
  }

  public getConnectionState(): Observable<boolean> {
    return this.connectionState$;
  }
}
