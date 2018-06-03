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

@Directive({
  selector: '[appCursorable]'
})
export class CursorableDirective implements OnInit {
  @Input('appCursorable') toolChanges: Observable<Tool>;
  svg: SVGSVGElement;
  previousTool: Tool;
  constructor(
    private elRef: ElementRef,
    private r: Renderer2
  ) {
    this.svg = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.toolChanges
      .subscribe((selectedTool: Tool) => {
        if (this.previousTool) {
          this.clear(this.previousTool);
        }

        if (!selectedTool) {
          return;
        }

        this.r.addClass(this.svg, `cursor__${selectedTool.name}`);
        this.previousTool = selectedTool;
      });
  }

  clear(tool: Tool): void {
    this.r.removeClass(this.svg, `cursor__${tool.name}`);
    this.r.removeClass(this.svg, `hover`);
  }

}
