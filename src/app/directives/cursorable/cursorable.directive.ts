import { GuiService } from '../../services/gui/gui.service';
import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  OnInit
} from '@angular/core';
import { ToolCursorEnum } from '@tools/enums';
@Directive({
  selector: '[appCursorable]'
})
export class CursorableDirective implements OnInit {
  @Input('appCursorable') cursor: string;
  svg: SVGSVGElement;
  prefix = 'cursor';

  constructor(
    private elRef: ElementRef,
    private r: Renderer2,
    private guiService: GuiService
  ) {
    this.svg = this.elRef.nativeElement;
  }

  ngOnInit(): void {
    this.guiService.cursor$
      .subscribe(this.handleChangeCursor);
  }

  handleChangeCursor = (toolCursor: ToolCursorEnum): void => {
    this.r.removeClass(this.svg, `${this.prefix}__${toolCursor}`);
    this.r.addClass(this.svg, `${this.prefix}__${toolCursor}`);
  }
}
