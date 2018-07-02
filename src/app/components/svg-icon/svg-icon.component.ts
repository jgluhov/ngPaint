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
  styleUrls: ['./svg-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgIconComponent {
  @Input()
  set imageUrl(imageUrl: string) {
    this.load(imageUrl);
  }

  constructor(
    private http: Http,
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {}

  load(imageUrl: string): void {
    if (!imageUrl) {
      return;
    }

    this.http.get(imageUrl)
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
