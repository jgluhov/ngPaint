import { Injectable, ElementRef } from '@angular/core';
import { ToolsModule } from '@modules/tools/tools.module';
import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import {
  switchMap,
  takeUntil,
  startWith,
  map
} from 'rxjs/operators';

@Injectable()
export class MouseService {
  constructor() {
  }

  trackMouse(el: ElementRef): Observable<SVGPoint> {
    const up$ = fromEvent(el.nativeElement, 'mouseup');
    const down$ = <Observable<MouseEvent>>fromEvent(el.nativeElement, 'mousedown');
    const mousemove$ = fromEvent(el.nativeElement, 'mousemove');

    return down$.pipe(
      switchMap((evt: MouseEvent) => {
        return mousemove$.pipe(
          startWith(evt),
          takeUntil(up$)
        );
      }),
      map((evt: MouseEvent) => {
        return this.toCoords(evt, el.nativeElement);
      })
    );
  }

  toCoords(evt: MouseEvent, svg: SVGSVGElement): SVGPoint {
    const p = svg.createSVGPoint();
    p.x = evt.clientX;
    p.y = evt.clientY;

    return p.matrixTransform(svg.getScreenCTM().inverse());
  }
}
