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
import { Tool } from '@tools/tools';
import { Shape } from '@tools/shapes/shape';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: [ './canvas.component.scss' ]
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  tool$: Observable<Tool>;
  shapes$: Observable<Shape[]>;
  shapes: Shape[];

  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('svg') svgRef: ElementRef;

  constructor(
    private store: Store<AppState>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.tool$ = this.store
      .select('app').select('tool');

    this.shapes$ = this.store
      .select('app').select('shapes');

    this.tool$
      .subscribe(this.loadComponent);

    this.shapes$.subscribe((shapes: Shape[]) => {
      this.shapes = shapes;
    });
  }

  loadComponent = (tool: Tool): void => {
    if (!tool) {
      return this.vcr.clear();
    }

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(tool.component);

    this.vcr.createComponent(componentFactory);
  }

}
