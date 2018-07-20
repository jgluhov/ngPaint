import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { CanvasService } from '@services';
import { DrawingToolComponent } from './drawing-tool.component';
import { GuiService } from '../../../../services/gui/gui.service';
import { TOOL_LIST_TOKEN } from '@tools';
import { toolList } from '@tools/tool-list';
import { of } from 'rxjs';

describe('DrawingToolComponent', () => {
  let component: DrawingToolComponent;
  let fixture: ComponentFixture<DrawingToolComponent>;
  let socketServiceMock;
  let userServiceMock;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    socketServiceMock = {
      socket$: of(42),
      send: (): void => {}
    };
    userServiceMock = {
      changeState: (): void => {},
      users$: of({})
    };
    TestBed.configureTestingModule({
      declarations: [
        DrawingToolComponent
      ],
      providers: [
        CanvasService,
        GuiService,
        {
          provide: TOOL_LIST_TOKEN,
          useValue: toolList
        },
        {
          provide: MouseServiceDirective,
          useFactory: (): MouseServiceDirective => new MouseServiceDirective(svgRef, socketServiceMock, userServiceMock)
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
