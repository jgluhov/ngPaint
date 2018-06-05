import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  ReflectiveInjector
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, of, map, switchMap } from '@rx';
import { Tool, Tools } from '@tools/types';
import { CanvasService } from '@services';
import { AppState, App, AppActions } from '@store';
import { Shape } from '@shapes';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: [ './canvas.component.scss' ]
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  selectedTool$: Observable<Tool>;
  selectedTool: Tool;
  app$: Observable<App>;

  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('svg') svgRef: ElementRef;

  constructor(
    private store: Store<AppState>,
    private componentFactoryResolver: ComponentFactoryResolver,
    public canvasService: CanvasService
  ) { }

  ngOnInit(): void {
    this.app$ = this.store.select('app');

    this.selectedTool$ = this.store
      .select('app')
      .pipe(map((app: App) => this.selectedTool = app.selectedTool));

    this.selectedTool$
      .subscribe(this.loadComponent);
  }

  handleHoverChange = (evt: AppActions.ChangeStatePayload): void => {
    if (this.selectedTool.name !== Tools.Hand) {
      return;
    }

    this.store.dispatch(new AppActions.ChangeHoveredState({ id: evt.id, state: evt.state }));
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
