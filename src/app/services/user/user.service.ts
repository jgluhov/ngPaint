import { Injectable } from '@angular/core';
import { User } from '@server/models/user.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { scan } from 'rxjs/operators';
import { ReplaySubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$: Observable<User[]>;
  private username$: Observable<string>;
  private usersHandler$: ReplaySubject<Function> = new ReplaySubject<Function>(1);
  private users: User[] = [];

  constructor() {
    this.username$ = of('jgluhov');

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

  remove = (id: string): void => {
    this.usersHandler$.next((users: User[]) => users.filter((u: User) => u.id !== id));
  }

  clear = (): void => {
    this.usersHandler$.next((users: User[]) => []);
  }
}
