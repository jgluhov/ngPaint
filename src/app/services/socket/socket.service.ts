import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '@env/environment';
import { Observable, Observer, BehaviorSubject, merge } from 'rxjs';
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
  public connectionState$;
  public connectionEstablished$;

  constructor(private userService: UserService) {
  }

  public init(): void {
    this.socket = io(environment.wsUrl);

    this.connectionState$ = merge(
      this.onEvent(SocketEventEnum.CONNECT).pipe(mapTo(true)),
      this.onEvent(SocketEventEnum.DISCONNECT).pipe(mapTo(false))
    )
    .pipe(
      startWith(false),
      share()
    );
  }

  public start(): void {
    this.onEvent(SocketUserActionEnum.JOINED)
      .subscribe(this.handleUserJoined);

    this.onEvent(SocketUserActionEnum.LEFT)
      .subscribe(this.handleUserLeft);

    this.connectionState$
      .pipe(filter((isConnected: boolean) => isConnected))
      .subscribe(this.handleConnectionEstablished);
  }

  public onEvent<T>(action: SocketActions): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.socket.on(action, observer.next.bind(observer));
    });
  }

  public join = (user: User): void => {
    this.socket.emit(SocketUserActionEnum.JOIN, user);
  }

  public handleUserLeft = (user: User): void => {
    this.userService.remove(user);
  }

  public handleUserJoined = (user: User): void => {
    this.userService.add(user);
  }

  public handleConnectionEstablished = (): void => {
    this.join(this.userService.me);
  }
}
