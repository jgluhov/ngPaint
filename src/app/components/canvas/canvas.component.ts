import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef,
  Injector,
  ViewEncapsulation,
  Type
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CanvasService, GuiService } from '@services';
import { ControlToolComponent } from '@tools/components/control-tool/control-tool.component';
import {
  PointerToolComponent,
  DrawingToolComponent,
  GeometryToolComponent
} from '@tools/components';
import {
  ToolTypeEnum,
  ShapeStateEnum,
  ToolGroupEnum
} from '@tools/enums';
import { IToolListItem } from '@tools/interfaces';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: [ './canvas.component.scss' ],
  encapsulation: ViewEncapsulation.None
})
export class CanvasComponent implements OnInit {
  title = 'Canvas';
  currentCursor$: Observable<string>;

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
