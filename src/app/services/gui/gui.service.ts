import { Injectable, Inject } from '@angular/core';
import { Observable } from '@rx';
import { BehaviorSubject } from 'rxjs';
import {
  ToolThicknessEnum,
  ToolCursorEnum,
  ToolTypeEnum,
  SVGShapeEnum
} from '@tools/enums';
import { IToolList, IToolListItem } from '@tools/interfaces';
import { TOOL_LIST_TOKEN } from '@tools/tool-list';
import { Shape } from '@tools/shapes';

@Injectable({
  providedIn: 'root'
})
export class GuiService {
  private cursorHandler$: BehaviorSubject<ToolCursorEnum> = new BehaviorSubject<ToolCursorEnum>(ToolCursorEnum.Default);
  private thicknessHandler$: BehaviorSubject<ToolThicknessEnum> = new BehaviorSubject<ToolThicknessEnum>(ToolThicknessEnum.THIN);
  private toolHandler$: BehaviorSubject<IToolListItem> = new BehaviorSubject<IToolListItem>(this.toolList[0]);
  cursor$: Observable<ToolCursorEnum>;
  thickness$: Observable<ToolThicknessEnum>;
  tool$: Observable<IToolListItem>;

  constructor(
    @Inject(TOOL_LIST_TOKEN) private toolList: IToolList
  ) {
    this.cursor$ = this.cursorHandler$.asObservable();
    this.thickness$ = this.thicknessHandler$.asObservable();
    this.tool$ = this.toolHandler$.asObservable();
  }

  public setCursor(cursor: ToolCursorEnum): void {
    this.cursorHandler$.next(cursor);
  }

  public setThickness(thickness: ToolThicknessEnum): void {
    this.thicknessHandler$.next(thickness);
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
}
