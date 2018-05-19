import { Component, Input, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tool-item',
  template: `
    <p>
      tool-item works!
    </p>
  `,
  styles: []
})
export class ToolItemComponent {
  @Input() name;
  @Output() select: EventEmitter<string> = new EventEmitter<string>();
  @HostListener('click') handleClick(): void {
    this.select.emit(this.name);
  }
}
