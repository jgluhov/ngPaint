import {
  Directive,
  Input,
  Renderer2,
  ElementRef,
  SimpleChanges,
  OnChanges
} from '@angular/core';
@Directive({
  selector: '[appCursorable]'
})
export class CursorableDirective implements OnChanges {
  @Input('appCursorable') cursor: string;
  svg: SVGSVGElement;
  prefix = 'cursor';

  constructor(private elRef: ElementRef, private r: Renderer2) {
    this.svg = this.elRef.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.r.removeClass(this.svg, `${this.prefix}__${changes.cursor.previousValue}`);

    if (!changes.cursor.currentValue) {
      return;
    }

    this.r.addClass(this.svg, `${this.prefix}__${changes.cursor.currentValue}`);
  }
}
