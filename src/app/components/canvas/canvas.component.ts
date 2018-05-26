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

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: [ './canvas.component.scss' ]
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  toolChanges: Observable<Tool>;

  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('svg') svgRef: ElementRef;

  constructor(
    private store: Store<AppState>,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
    this.toolChanges = this.store
      .select('app').select('tool');

    this.toolChanges
      .subscribe(this.loadComponent);
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
