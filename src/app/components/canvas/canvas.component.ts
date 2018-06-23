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
import { ofType } from '@ngrx/effects';
import { Observable, of, map, switchMap, Subject, merge } from '@rx';
import { CanvasService } from '@services';
import { Shape } from '@shapes';
import { ControlToolComponent } from '../../modules/tools/components/control-tool/control-tool.component';
import {
  PointerToolComponent,
  DrawingToolComponent,
  GeometryToolComponent
} from '@tools/components';
import { distinctUntilChanged } from 'rxjs/operators';
import { GuiService } from '../../services/gui/gui.service';
import { ToolCursorEnum, ToolTypeEnum } from '@tools/enums';
import { ShapeStateEnum } from '../../modules/tools/enums/shape-state.enum';
import { IToolListItem } from '@tools/interfaces';
import { ToolGroupEnum } from '../../modules/tools/enums/tool-group.enum';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: [ './canvas.component.scss' ]
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  currentCursor$: Observable<string>;
  cursorChanger$: Subject<ToolCursorEnum> = new Subject<ToolCursorEnum>();

  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;
  @ViewChild('svg') svgRef: ElementRef;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    public canvasService: CanvasService,
    public injector: Injector,
    public guiService: GuiService
  ) { }

  ngOnInit(): void {
    this.guiService.tool$
      .subscribe(this.loadComponent);
  }

  handleShapeStateChange = (evt: {id: string; state: ShapeStateEnum}): void => {
    if (this.guiService.isCurrentToolType(ToolTypeEnum.Hand)) {
      return;
    }

    const cursor = evt.state === ShapeStateEnum.HOVERED ?
      ToolCursorEnum.Hand : ToolCursorEnum.Default;

    this.cursorChanger$.next(cursor);
    this.canvasService.changeState(evt.id, evt.state);
  }

  loadComponent = (tool: IToolListItem): void => {
    this.vcr.clear();

    if (!tool) {
      return;
    }

    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(this.getComponentByGroup(tool.group));

    const componentRef = this.vcr.createComponent(componentFactory);
  }

  getComponentByGroup(group: ToolGroupEnum): Type<any> {
    switch (group) {
      case ToolGroupEnum.Default:
        return PointerToolComponent;
      case ToolGroupEnum.Drawing:
        return DrawingToolComponent;
      case ToolGroupEnum.Geomentry:
        return GeometryToolComponent;
      case ToolGroupEnum.Control:
        return ControlToolComponent;
      default:
        return PointerToolComponent;
    }
  }
}
