import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '@env/environment';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import {
  SocketUserActionEnum,
  SocketActions
} from '@server/socket.enums';
import { mapTo, startWith, share, filter, tap, map } from 'rxjs/operators';
import { SocketEventEnum } from '../../../../server/socket.enums';
import { merge } from 'rxjs/observable/merge';
import { UserService } from '../user/user.service';
import { User } from '../../../../server/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  public connectionState$;

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
      .subscribe(this.userService.add);

    this.connectionState$
      .subscribe((state: boolean) => console.log(`connection state change: ${state}`));

    // Joining
    this.connectionState$
      .pipe(filter((isConnected: boolean) => isConnected))
      .subscribe(() => this.userJoin(this.userService.me));
  }

  public onEvent<T>(action: SocketActions): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.socket.on(action, observer.next.bind(observer));
    });
  }

  public userJoin(user: User): void {
    this.socket.emit(SocketUserActionEnum.JOIN, user);
  }
}
