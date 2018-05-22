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
import { Tool } from '@models/tool';

export interface WorkSpace {
  workSpace: ElementRef;
}

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: [ './canvas.component.scss' ]
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  toolChanges: Observable<Tool>;

  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('workSpace') workSpace: ElementRef;

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
    this.vcr.clear();

    if (!tool) {
      return;
    }

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(tool.options.component);

    const componentInjector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'WorkSpace',
        useValue: this.workSpace
      }
    ]);

    this.vcr.createComponent(componentFactory, 0, componentInjector);
  }

}
