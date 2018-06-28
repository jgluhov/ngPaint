import { Injectable, Inject } from '@angular/core';
import { Observable, Subject } from '@rx';
import { BehaviorSubject } from 'rxjs';
import {
  ToolThicknessEnum,
  ToolCursorEnum,
  ToolTypeEnum,
  SVGShapeEnum
} from '@tools/enums';
import { IToolList, IToolListItem } from '@tools/interfaces';
import { Shape } from '@tools/shapes';
import { TOOL_DEFAULT_COLOR } from '@tools/tool-options';

@Injectable({
  providedIn: 'root'
})
export class GuiService {
  private cursorHandler$: BehaviorSubject<ToolCursorEnum> = new BehaviorSubject<ToolCursorEnum>(null);
  private thicknessHandler$: BehaviorSubject<ToolThicknessEnum> = new BehaviorSubject<ToolThicknessEnum>(null);
  private toolHandler$: BehaviorSubject<IToolListItem> = new BehaviorSubject<IToolListItem>(null);
  private colorHandler$: BehaviorSubject<string> = new BehaviorSubject<string>(TOOL_DEFAULT_COLOR);
  cursor$: Observable<ToolCursorEnum>;
  thickness$: Observable<ToolThicknessEnum>;
  tool$: Observable<IToolListItem>;
  color$: Observable<string>;

  constructor() {
    this.cursor$ = this.cursorHandler$.asObservable();
    this.thickness$ = this.thicknessHandler$.asObservable();
    this.tool$ = this.toolHandler$.asObservable();
    this.color$ = this.colorHandler$.asObservable();
  }

  public setCursor(cursor: ToolCursorEnum): void {
    this.cursorHandler$.next(cursor);
  }

  public setThickness(thickness: ToolThicknessEnum): void {
    this.thicknessHandler$.next(thickness);
  }

  public setColor(color: string): void {
    this.colorHandler$.next(color);
  }

  public setTool(tool: IToolListItem): void {
    this.setCursor(tool.cursor);
    this.setThickness(tool.thickness);
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

  public get currentColor(): string {
    return this.colorHandler$.value;
  }

  public get currentThickness(): number {
    return this.thicknessHandler$.value;
  }
}
