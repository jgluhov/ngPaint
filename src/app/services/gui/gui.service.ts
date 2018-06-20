import { Injectable } from '@angular/core';
import { Observable } from '@rx';
import { BehaviorSubject } from 'rxjs';
import { CursorTypes } from '@tools/types/cursor-types';

@Injectable({
  providedIn: 'root'
})
export class GuiService {
  private cursorHandler$: BehaviorSubject<CursorTypes> = new BehaviorSubject<CursorTypes>(CursorTypes.Default);
  cursor$: Observable<string>;

  constructor() {
    this.cursor$ = this.cursorHandler$.asObservable();
  }

  public setCursor(cursorType: CursorTypes): void {
    this.cursorHandler$.next(cursorType);
  }
}
