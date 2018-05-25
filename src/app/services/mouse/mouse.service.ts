import { Injectable, ElementRef, Provider } from '@angular/core';
import { ToolsModule } from '@modules/tools/tools.module';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import {
  switchMap,
  takeUntil,
  startWith,
  map,
  tap,
  mapTo,
  take,
  takeWhile
} from 'rxjs/operators';

export function provideMouseService(svgRef: ElementRef): Provider {
  return {
    provide: MouseService,
    useFactory: (): MouseService => new MouseService(svgRef)
  };
}

@Injectable()
export class MouseService {
  svg: SVGSVGElement;
  constructor(private elRef: ElementRef) {
    this.svg = this.elRef.nativeElement.querySelector('#svg');
  }

  fromEvent(name: string): Observable<MouseEvent> {
    return fromEvent(this.svg, name)
      .pipe(tap((evt: MouseEvent) => evt.preventDefault()));
  }

  trackMouse(evt: MouseEvent): Observable<SVGPoint> {
    const move$ = this.fromEvent('mousemove');
    const end$ = merge(
      this.fromEvent('mouseup'),
      this.fromEvent('mouseleave')
    );

    return move$
      .pipe(
        takeUntil(end$),
        map(this.toCoords)
      );
  }

  toCoords = (evt: MouseEvent): SVGPoint => {
    const p = this.svg.createSVGPoint();
    p.x = evt.clientX;
    p.y = evt.clientY;

    return p.matrixTransform(this.svg.getScreenCTM().inverse());
  }
}
