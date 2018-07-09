import { Injectable } from '@angular/core';
import { User, createUser } from '@server/models/user.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { scan } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$: Observable<User[]>;
  private _me: User;
  private usersHandler$: ReplaySubject<Function> = new ReplaySubject<Function>(1);
  private users: User[] = [];

  constructor() {
    this._me = createUser('jgluhov');

    this.users$ = this.usersHandler$
      .pipe(
        scan((users: User[], fn: Function) => fn(users), [])
      );

    this.users$.subscribe(
      (users: User[]) => {
        console.log('users: ', users);
      });
  }

  add = (...newbies: User[]): void => {
    this.usersHandler$.next((users: User[]) => users.concat(newbies));
  }

  remove = (user: User): void => {
    this.usersHandler$.next((users: User[]) => users.filter((u: User) => u.id !== user.id));
  }

  clear = (): void => {
    this.usersHandler$.next((users: User[]) => []);
  }

  get me(): User {
    return this._me;
  }
}
