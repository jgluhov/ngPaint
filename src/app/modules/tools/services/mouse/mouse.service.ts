import { Injectable, ElementRef } from '@angular/core';
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

@Injectable()
export class MouseService {
  constructor() {
  }

  fromEvent(el: ElementRef, evtName: string): Observable<MouseEvent> {
    return fromEvent(el.nativeElement, evtName)
      .pipe(tap((evt: MouseEvent) => evt.preventDefault()));
  }

  trackMouse(el: ElementRef): Observable<SVGPoint> {
    const down$ = this.fromEvent(el, 'mousedown');
    const move$ = this.fromEvent(el, 'mousemove');
    const end$ = merge(
      this.fromEvent(el, 'mouseup'),
      this.fromEvent(el, 'mouseleave')
    );

    end$.pipe(mapTo('ends')).subscribe(console.log);

    return down$.pipe(
      switchMap((evt: MouseEvent) => {
        return move$.pipe(
          startWith(evt),
          takeUntil(end$)
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
