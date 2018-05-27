import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  ReflectiveInjector
} from '@angular/core';
import { AppState } from '@store/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Tool } from '@tools/types/tool';
import { Shape } from '@tools/shapes/shape';
import { of } from 'rxjs/observable/of';
import { filter, switchMap, map } from 'rxjs/operators';
import { PolylineShape } from '@tools/shapes/polyline-shape';
import { ShapeService } from '@tools/services/shape/shape.service';
import * as AppActions from '@store/actions/app.actions';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: [ './canvas.component.scss' ]
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  toolChange: Observable<Tool>;

  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('svg') svgRef: ElementRef;

  constructor(
    private store: Store<AppState>,
    private componentFactoryResolver: ComponentFactoryResolver,
    private shapeService: ShapeService
  ) { }

  ngOnInit(): void {
    this.toolChange = this.store
      .select('app')
      .select('tool');

    this.toolChange
      .subscribe(this.loadComponent);
  }

  loadComponent = (tool: Tool): void => {
    this.vcr.clear();

    if (!tool) {
      return;
    }

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(tool.component);

    const componentRef = this.vcr.createComponent(componentFactory);
  }

  trackByFn(index: number, item: Shape): string {
    return item.id;
  }

}
