import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from '@rx';
import { BehaviorSubject } from 'rxjs';
import {
  ToolCursorEnum,
  ToolTypeEnum,
  SVGShapeEnum
} from '@tools/enums';
import { IToolList, IToolListItem } from '@tools/interfaces';
import { Shape } from '@tools/shapes';
import { SHAPE_DEFAULT_STROKE } from '@tools/tool-options';

@Injectable({
  providedIn: 'root'
})
export class GuiService {
  private toolHandler$: BehaviorSubject<IToolListItem> = new BehaviorSubject<IToolListItem>(null);
  private cursorHandler$: BehaviorSubject<ToolCursorEnum> = new BehaviorSubject<ToolCursorEnum>(null);
  private strokeWidthHandler$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private strokeHandler$: BehaviorSubject<string> = new BehaviorSubject<string>(SHAPE_DEFAULT_STROKE);
  tool$: Observable<IToolListItem>;
  cursor$: Observable<ToolCursorEnum>;
  strokeWidth$: Observable<number>;
  stroke$: Observable<string>;

  constructor() {
    this.cursor$ = this.cursorHandler$.asObservable();
    this.strokeWidth$ = this.strokeWidthHandler$.asObservable();
    this.tool$ = this.toolHandler$.asObservable();
    this.stroke$ = this.strokeHandler$.asObservable();
  }

  public setCursor(cursor: ToolCursorEnum): void {
    this.cursorHandler$.next(cursor);
  }

  public setStrokeWidth(strokeWidth: number): void {
    this.strokeWidthHandler$.next(strokeWidth);
  }

  public setColor(color: string): void {
    this.strokeHandler$.next(color);
  }

  public setTool(tool: IToolListItem): void {
    this.setCursor(tool.cursor);
    this.setStrokeWidth(tool.strokeWidth);
    this.toolHandler$.next(tool);
  }

  public isCurrentTool(tool: IToolListItem): boolean {
    return this.toolHandler$.value === tool;
  }

  public isCurrentToolType(type: ToolTypeEnum): boolean {
    return this.toolHandler$.value.type === type;
  }

  public isCurrentShape(shape: SVGShapeEnum): boolean {
    return this.toolHandler$.value.shape === shape;
  }

  public get currentTool(): IToolListItem {
    return this.toolHandler$.value;
  }

  public get currentStroke(): string {
    return this.strokeHandler$.value;
  }

  public get currentStrokeWidth(): number {
    return this.strokeWidthHandler$.value;
  }
}
