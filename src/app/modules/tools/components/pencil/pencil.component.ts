import { Observable } from 'rxjs/Observable';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { WorkSpace } from '@components/canvas/canvas.component';
import { MouseService } from '@tools/services/mouse/mouse.service';
import {
  Component,
  OnInit,
  OnDestroy,
  Inject
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pencil',
  template: ''
})
export class PencilComponent implements OnInit, OnDestroy {
  tracker$: Observable<SVGPoint>;
  subscription: Subscription;
  constructor(
    private mouseService: MouseService,
    @Inject('WorkSpace') private workSpace: WorkSpace
  ) {}

  ngOnInit(): void {
    this.tracker$ = this.mouseService
      .trackMouse(this.workSpace.elementRef);

    this.subscription = this.tracker$
      .subscribe((p: SVGPoint) => {
        console.log(SVGPoint);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
