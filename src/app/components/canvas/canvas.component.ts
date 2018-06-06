import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  ReflectiveInjector,
  Injector,
  Type
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, of, map, switchMap } from '@rx';
import { Tool, ToolTypes } from '@tools/types';
import { CanvasService } from '@services';
import { AppState, App, AppActions } from '@store';
import { Shape } from '@shapes';
import { ToolGroups } from '../../modules/tools/types/tool-groups';
import { ControlToolComponent } from '../../modules/tools/components/control-tool/control-tool.component';
import {
  PointerToolComponent,
  DrawingToolComponent,
  GeometryToolComponent
} from '@tools/components';

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
    public canvasService: CanvasService,
    public injector: Injector
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
    if (this.selectedTool.type !== ToolTypes.Hand) {
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
      .resolveComponentFactory(this.getComponentByGroup(tool.group));

    const componentRef = this.vcr.createComponent(componentFactory);
  }

  getComponentByGroup(group: ToolGroups): Type<any> {
    switch (group) {
      case ToolGroups.Default:
        return PointerToolComponent;
      case ToolGroups.Drawing:
        return DrawingToolComponent;
      case ToolGroups.Geomentry:
        return GeometryToolComponent;
      case ToolGroups.Control:
        return ControlToolComponent;
      default:
        return PointerToolComponent;
    }
  }
}
