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
import { of } from 'rxjs/observable/of';
import { CanvasService } from '@services/canvas/canvas.service';
import { map } from 'rxjs/operators';
import { App } from '../../store/reducers/app.reducer';
import { Shape } from '@shapes/shape';
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
    public canvasService: CanvasService
  ) { }

  ngOnInit(): void {
    this.toolChange = this.store
      .select('app')
      .pipe(map((app: App) => app.selectedTool));

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
}
