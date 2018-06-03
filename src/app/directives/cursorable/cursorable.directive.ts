import {
  Directive,
  OnInit,
  Input,
  Renderer2,
  ElementRef
} from '@angular/core';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@tools/types/tool';
import { SelectTool } from '@store/actions/app.actions';
import { App } from '@store/reducers/app.reducer';
import { map, withLatestFrom } from 'rxjs/operators';
import { Shape } from '@tools';
import { Tools } from '../../modules/tools/types/tools';

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
          this.r.removeClass(this.svg, `cursor__${this.previousTool.name}`);
        }

        if (!selectedTool) {
          return;
        }

        this.r.addClass(this.svg, `cursor__${selectedTool.name}`);
        this.previousTool = selectedTool;
      });

    this.hoveredShape$
      .pipe(withLatestFrom(this.selectedTool$))
      .subscribe(([shape, selectedTool]: [Shape, Tool]) => {
        if (selectedTool && (selectedTool.name !== Tools.Hand) || !shape) {
          return this.r.removeClass(this.svg, `hovered`);
        }

        return this.r.addClass(this.svg, `hovered`);
      });
  }
}
