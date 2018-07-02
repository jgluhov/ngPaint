import { Injectable } from '@angular/core';
import { User } from '@server/models';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { scan, startWith, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersHandler$: Subject<Function> = new Subject<Function>();
  users$: Observable<User[]>;
  me: User;
  users: User[] = [];

  constructor() {
    this.me = new User('jgluhov');

    this.users$ = this.usersHandler$
      .pipe(
        scan((users: User[], fn: Function) => fn(users), []),
        share()
      );

    this.users$.subscribe(
      (users: User[]) => {
        console.log('users: ', users);
      });

    this.add(this.me);
  }

  add = (user: User): void => {
    this.usersHandler$.next((users: User[]) => users.concat(user));
  }

  remove = (user: User): void => {
    this.usersHandler$.next((users: User[]) => users.filter((u: User) => u.id !== user.id));
  }
}
