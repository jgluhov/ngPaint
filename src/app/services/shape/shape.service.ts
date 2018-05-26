import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@store/app-state';
import { Shape } from '@tools/shapes/shape';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { scan } from 'rxjs/operators';

@Injectable()
export class ShapeService {
  private shapesStore$: ReplaySubject<Shape[]> = new ReplaySubject<Shape[]>();
  public shapes$: Observable<Shape[]>;

  constructor(private store: Store<AppState>) {
    this.store
      .select('app')
      .select('shapes')
      .subscribe(this.shapesStore$);

    this.shapes$ = this.shapesStore$
      .pipe(
        scan(
          (shapes: Shape[], updatedShapes: Shape[]) => {
            return shapes.concat(updatedShapes);
          },
          []
        )
      );
  }

  add(shape: Shape): void {
    this.shapesStore$.next([shape]);
  }
}
