import {
  Directive,
  OnInit,
  Input,
  Renderer2,
  ElementRef
} from '@angular/core';
import { AppState } from '@store/app-state';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@models';

@Directive({
  selector: '[appCursorable]'
})
export class CursorableDirective implements OnInit {
  @Input('appCursorable') toolChanges: Observable<Tool>;
  selectedTool: Tool;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.toolChanges
      .subscribe((tool: Tool) => {
        if (this.selectedTool) {
          this.renderer.removeClass(
            this.elementRef.nativeElement,
            `cursor__${this.selectedTool.name}`
          );
        }

        if (!tool) {
          return;
        }

        this.renderer.addClass(
          this.elementRef.nativeElement,
          `cursor__${tool.name}`
        );

        this.selectedTool = tool;
      });
  }

}
