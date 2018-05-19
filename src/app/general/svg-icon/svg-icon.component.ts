import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Renderer,
  ElementRef
} from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-svg-icon',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input()
  set name(iconName: string) {
    this.load(iconName);
  }

  constructor(
    private http: Http,
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {}

  load(iconName: string): void {
    this.http.get(`assets/icons/${iconName}.svg`)
      .subscribe((response: Response) => {
        const element = <HTMLElement>this.elementRef.nativeElement;
        element.innerHTML = '';

        const iconStr = response.text();
        const parser = new DOMParser();
        const svg = parser.parseFromString(iconStr, 'image/svg+xml');

        this.renderer.projectNodes(element, [svg.documentElement]);
      });
  }
}
