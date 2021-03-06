import * as io from 'socket.io-client';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Observable, merge, fromEvent, of, ReplaySubject } from 'rxjs';
import { mapTo, switchMap, map, mergeMap, takeUntil, withLatestFrom } from 'rxjs/operators';
import { UserService } from '@services/user/user.service';
import { Socket } from 'socket.io';
import { Subject } from 'rxjs/Subject';
import { Shape } from '../../modules/tools/shapes/shape';
import { CanvasService } from '@services/canvas/canvas.service';
import { ShapeService } from '../shape/shape.service';
import { User } from '@interfaces/user.interface';
import { UserStates } from '@enums/user-states.enum';
import { SocketEventEnum } from '@enums/socket-event.enum';

interface SocketIOData<T> {
  socket: SocketIO.Socket;
  data: T;
}

interface SocketIOMessage<T> {
  id: string;
  message: T;
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
  private connection$: ReplaySubject<SocketIO.Socket> = new ReplaySubject(1);
  private disconnect$;
  private connectionState$;
  constructor(
    private userService: UserService,
    private canvasService: CanvasService,
    private shapeService: ShapeService
  ) {}

  public connect(): void {
    this.socket$ = of(io.connect(environment.wsUrl));

    this.socket$.pipe(
      switchMap((socket: Socket) =>
        fromEvent(socket, SocketEventEnum.CONNECT)
          .pipe(map(() => socket))
      )
    ).subscribe(this.connection$);

    this.disconnect$ = this.socket$.pipe(
      switchMap((socket: Socket) =>
        fromEvent(socket, SocketEventEnum.DISCONNECT)
      )
    );

    this.connectionState$ = merge(
      this.connection$.pipe(mapTo(SocketStateEnum.CONNECTED)),
      this.disconnect$.pipe(mapTo(SocketStateEnum.DISCONNECTED))
    );

    this.listen(SocketEventEnum.ALL_USERS).pipe(withLatestFrom(this.socket$)).subscribe(this.handleAllUsers);
    this.listen(SocketEventEnum.USER_LEFT).subscribe(this.handleUserLeft);
    this.listen(SocketEventEnum.USER_JOIN).subscribe(this.handleUserJoin);
    this.listen(SocketEventEnum.CHANGE_STATE).subscribe(this.handleStateChange);
    this.listen(SocketEventEnum.SHAPE_ADD).subscribe(this.handleShapeAdd);
    this.listen(SocketEventEnum.SHAPE_CHANGE).subscribe(this.handleShapeChange);

    this.send(this.userService.username$, SocketEventEnum.SAVE_USERNAME);
  }

  private listen<T>(event: string): Observable<T> {
    return this.connection$
      .pipe(
        mergeMap((socket: Socket) => fromEvent(socket, event)),
        takeUntil(this.disconnect$)
    );
  }

  public send = <T>(data$: Observable<T>, event: string): void => {
    this.connection$
      .pipe(
        switchMap((socket: SocketIO.Socket) => {
          return data$.pipe(
            map(((data: T): SocketIOData<T> => ({socket, data}))),
            takeUntil(this.disconnect$)
          );
        })
      )
      .subscribe(({socket, data}: SocketIOData<T>) => {
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

  private handleShapeAdd = ({id, message: shape}: SocketIOMessage<Shape>): void => {
    const composedShape = this.shapeService.composeShape(shape);
    this.canvasService.add(composedShape);
  }

  private handleShapeChange = ({id, message: shape}: SocketIOMessage<Shape>): void => {
    const composedShape = this.shapeService.composeShape(shape);
    this.canvasService.replace(composedShape);
  }

  private handleStateChange = ({id, message}: SocketIOMessage<UserStates>): void => {
    this.userService.changeState(id, message);
  }

  public getConnectionState(): Observable<boolean> {
    return this.connectionState$;
  }

  public identifying(socket: SocketIO.Socket, users: User[]): void {
    users.forEach((user: User) => {
      user.me = user.id === socket.id;
    });
  }

}
