import {
  Directive,
  OnInit,
  Input,
  Renderer2,
  ElementRef
} from '@angular/core';
import {
  Observable,
  map,
  withLatestFrom
} from '@rx';
import { Tool, ToolTypes } from '@tools/types';
import { App, AppState, AppActions } from '@store';
import { Shape } from '@shapes';
@Directive({
  selector: '[appCursorable]'
})
export class CursorableDirective implements OnInit {
  @Input('appCursorable') appChanges: Observable<App>;
  svg: SVGSVGElement;
  previousTool: Tool;
  selectedTool$: Observable<Tool>;
  hoveredShape$: Observable<Shape>;
  constructor(
    private elRef: ElementRef,
    private r: Renderer2
  ) {
    this.svg = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.hoveredShape$ = this.appChanges.pipe(map((app: App) => app.hoveredShape));
    this.selectedTool$ = this.appChanges.pipe(map((app: App) => app.selectedTool));

    this.selectedTool$
      .subscribe((selectedTool: Tool) => {
        if (this.previousTool) {
          this.r.removeClass(this.svg, `cursor__${this.previousTool.type}`);
        }

        if (!selectedTool) {
          return;
        }

        this.r.addClass(this.svg, `cursor__${selectedTool.type}`);
        this.previousTool = selectedTool;
      });

    // TODO: move this logic into separate class tool
    this.hoveredShape$
      .pipe(withLatestFrom(this.selectedTool$))
      .subscribe(([shape, selectedTool]: [Shape, Tool]) => {
        if (selectedTool && (selectedTool.type !== ToolTypes.Hand) || !shape) {
          return this.r.removeClass(this.svg, `hovered`);
        }

        return this.r.addClass(this.svg, `hovered`);
      });
  }
}
