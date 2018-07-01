import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '@env/environment';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import {
  SocketUserActionEnum,
  SocketActions
} from '@server/socket.enums';
import { mapTo, startWith, share } from 'rxjs/operators';
import { SocketEventEnum } from '../../../../server/socket.enums';
import { merge } from 'rxjs/observable/merge';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;
  private connectionHandler$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isConnected$;

  constructor() {
    this.isConnected$ = this.connectionHandler$.asObservable();
  }

  public init(): void {
    this.socket = io(environment.wsUrl);
  }

  public start(): void {
    const stateChanges$ = merge(
      this.onEvent(SocketEventEnum.CONNECT).pipe(mapTo(true)),
      this.onEvent(SocketEventEnum.DISCONNECT).pipe(mapTo(false))
    );

    stateChanges$.subscribe(this.connectionHandler$);

    this.onEvent(SocketUserActionEnum.JOIN)
      .subscribe(() => console.log('user joined'));

    this.isConnected$.subscribe((state: boolean) => console.log(`connection state: ${state}`));
  }

  public onEvent<T>(action: SocketActions): Observable<T> {
    return Observable.create((observer: Observer<T>) => {
      this.socket.on(action, observer.next.bind(observer));
    });
  }
}
