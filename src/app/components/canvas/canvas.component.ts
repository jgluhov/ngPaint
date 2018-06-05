import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  ReflectiveInjector,
  Injector
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ofType } from '@ngrx/effects';
import { Observable, of, map, switchMap } from '@rx';
import { Tool, Tools } from '@tools/types';
import { CanvasService } from '@services';
import { AppState, App, AppActions } from '@store';
import { Shape } from '@shapes';
import { ToolGroups } from '../../modules/tools/types/tool-groups';
import { PointerToolComponent } from '../../modules/tools/components/pointer-tool/pointer-tool.component';
import { DrawingToolComponent } from '../../modules/tools/components/drawing-tool/drawing-tool.component';
import { GeometryToolComponent } from '../../modules/tools/components/geometry-tool/geometry-tool.component';
import { Type } from '@angular/core';

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
      default:
        return PointerToolComponent;
    }
  }
}
