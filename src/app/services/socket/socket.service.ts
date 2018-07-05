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
  private joins$;
  private lefts$;
  private state$;
  private errors$;
  private all$;
  public connectionEstablished$;

  constructor(private userService: UserService) {
  }

  public connect(): void {
    this.socket = io(environment.wsUrl);

    this.connects$ = fromEvent(this.socket, SocketEventEnum.CONNECT);
    this.disconnects$ = fromEvent(this.socket, SocketEventEnum.DISCONNECT);
    this.joins$ = fromEvent(this.socket, SocketUserActionEnum.JOINED);
    this.lefts$ = fromEvent(this.socket, SocketUserActionEnum.LEFT);
    this.errors$ = fromEvent(this.socket, SocketEventEnum.CONNECT_ERROR);
    this.all$ = fromEvent(this.socket, SocketUserActionEnum.ALL);

    this.connects$.subscribe(() => {
      this.socket.emit(SocketUserActionEnum.JOIN, this.userService.me);
      this.socket.emit(SocketUserActionEnum.ALL);
    });

    this.all$.subscribe((users: User[]) => {
      this.userService.add(...users);
    });

    this.disconnects$.subscribe(() => {
      this.userService.clear();
    });

    this.joins$.subscribe((user: User) => {
      this.userService.add(user);
    });

    this.lefts$.subscribe((user: User) => {
      this.userService.remove(user);
    });

    this.errors$.subscribe(() => {
      console.warn('Error handler');
    });
  }

  public stateChanges(): Observable<boolean> {
    return merge(
      this.connects$.pipe(mapTo(true)),
      this.disconnects$.pipe(mapTo(false))
    );
  }
}
