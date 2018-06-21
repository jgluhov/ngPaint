import { Injectable } from '@angular/core';
import { Observable } from '@rx';
import { BehaviorSubject } from 'rxjs';
import { CursorTypes } from '@tools/types/cursor-types';
import { ThicknessLines } from '@tools/types/thickness-lines';

@Injectable({
  providedIn: 'root'
})
export class GuiService {
  private cursorHandler$: BehaviorSubject<CursorTypes> = new BehaviorSubject<CursorTypes>(CursorTypes.Default);
  private thicknessHandler$: BehaviorSubject<ThicknessLines> = new BehaviorSubject<ThicknessLines>(ThicknessLines.THIN);
  cursor$: Observable<CursorTypes>;
  thickness$: Observable<ThicknessLines>;

  constructor() {
    this.cursor$ = this.cursorHandler$.asObservable();
    this.thickness$ = this.thicknessHandler$.asObservable();
  }

  public setCursor(cursorType: CursorTypes): void {
    this.cursorHandler$.next(cursorType);
  }

  public setThickness(thickness: ThicknessLines): void {
    this.thicknessHandler$.next(thickness);
  }
}
