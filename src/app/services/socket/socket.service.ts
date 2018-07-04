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
  private socketState$;
  public connectionState$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public connectionEstablished$;

  constructor(private userService: UserService) {
  }

  public init(): void {
    this.socket = io(environment.wsUrl);
  }

  public start(): void {
    this.socketState$ = this.getSocketState();

    this.socketState$
      .subscribe(this.connectionState$);

    this.socketState$
      .pipe(
        filter((state: boolean) => state)
      )
      .subscribe(this.handleConnectionEstablished);

    this.onEvent(SocketUserActionEnum.JOINED)
      .subscribe(this.handleUserJoined);

    this.onEvent(SocketUserActionEnum.LEFT)
      .subscribe(this.handleUserLeft);
  }

  public onEvent<T>(action: SocketActions): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.socket.on(action, observer.next.bind(observer));
    });
  }

  public getSocketState(): Observable<boolean> {
    return merge(
      this.onEvent(SocketEventEnum.CONNECT).pipe(mapTo(true)),
      this.onEvent(SocketEventEnum.DISCONNECT).pipe(mapTo(false))
    )
    .pipe(
      startWith(false)
    );
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
