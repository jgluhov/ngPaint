import { Injectable } from '@angular/core';
import { User, UserStates } from '@server/models/user.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { scan } from 'rxjs/operators';
import { ReplaySubject, BehaviorSubject } from 'rxjs';
import { name } from 'faker';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$: Observable<User[]>;
  username$: BehaviorSubject<string> = new BehaviorSubject(name.findName());
  private usersHandler$: ReplaySubject<Function> = new ReplaySubject<Function>(1);

  constructor() {
    this.users$ = this.usersHandler$
      .pipe(
        scan((users: User[], fn: Function) => fn(users), [])
      );
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

  changeState = (id: string, state: UserStates): void => {
    this.usersHandler$.next((users: User[]) => {
      const foundUser = users.find((user: User) => user.id === id);
      foundUser.state = state;

      return users;
    });
  }
}
