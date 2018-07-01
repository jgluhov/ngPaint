import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '@env/environment';
import { Observable, Observer } from 'rxjs';
import {
  SocketUserActionEnum,
  SocketEventEnum
} from '@server/socket.enums';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket;

  public init(): void {
    this.socket = io(environment.wsUrl);
  }

  public start(): void {
    this.onEvent(SocketEventEnum.CONNECT)
      .subscribe(() => console.log('connected'));

    this.onEvent(SocketEventEnum.DISCONNECT)
      .subscribe(() => console.log('disconnected'));
  }

  public onEvent(event: SocketEventEnum): Observable<string> {
    return Observable.create((observer: Observer<string>) => {
      this.socket.on(event, () => {
        console.log('here');
        observer.next('event');
      });
    });
  }
}
