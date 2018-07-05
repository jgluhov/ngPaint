import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '@env/environment';
import { Observable, Observer, BehaviorSubject, merge, fromEvent } from 'rxjs';
import { mapTo, startWith, share, filter, tap, map } from 'rxjs/operators';
import {
  SocketUserActionEnum,
  SocketActions,
  SocketEventEnum
} from '@server/socket.enums';
import { UserService } from '@services/user/user.service';
import { User } from '@server/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private disconnects$;
  private connects$;
  private state$;
  public connectionEstablished$;

  constructor(private userService: UserService) {
  }

  public connect(): void {
    this.socket = io(environment.wsUrl);

    this.connects$ = fromEvent(this.socket, SocketEventEnum.CONNECT);
    this.disconnects$ = fromEvent(this.socket, SocketEventEnum.DISCONNECT);
  }

  public disconnect(): void {
    this.socket.disconnect();
  }

  public start(): void {
    this.state$ = this.stateChanges();

    fromEvent(this.socket, SocketUserActionEnum.JOINED)
      .subscribe(this.handleUserJoined);

    this.state$
      .subscribe(this.connectionState$);

    this.state$
      .pipe(filter((state: boolean) => state))
      .subscribe(this.handleUserJoin);

    this.onEvent(SocketUserActionEnum.JOINED)
      .subscribe(this.handleUserJoined);

    this.onEvent(SocketUserActionEnum.LEFT)
      .subscribe(this.handleUserLeft);

    this.onEvent(SocketEventEnum.CONNECT_ERROR)
      .subscribe(this.handleConnectionError);
  }

  public onEvent<T>(action: SocketActions): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.socket.on(action, observer.next.bind(observer));
    });
  }

  public stateChanges(): Observable<boolean> {
    return merge(
      this.onEvent(SocketEventEnum.CONNECT).pipe(mapTo(true)),
      this.onEvent(SocketEventEnum.DISCONNECT).pipe(mapTo(false))
    )
    .pipe(
      startWith(false)
    );
  }

  public handleUserJoin = (): void => {
    this.socket.emit(SocketUserActionEnum.JOIN, this.userService.me);
  }

  public handleUserLeft = (user: User): void => {
    this.userService.remove(user);
  }

  public handleUserJoined = (user: User): void => {
    this.userService.add(user);
  }

  public handleConnectionError = (): void => {
    console.log('error');
  }

  public connectionState$(): Observable<boolean> {
    return this.state$;
  }
}
