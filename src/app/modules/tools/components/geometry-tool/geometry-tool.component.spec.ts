import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { CanvasService } from '@services';

import { GeometryToolComponent } from './geometry-tool.component';
import { GuiService } from '@services/gui/gui.service';
import { TOOL_LIST_TOKEN, toolList } from '@tools';

describe('GeometryToolComponent', () => {
  let component: GeometryToolComponent;
  let fixture: ComponentFixture<GeometryToolComponent>;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    TestBed.configureTestingModule({
      providers: [
        CanvasService,
        GuiService,
        {
          provide: TOOL_LIST_TOKEN,
          useValue: toolList
        },
        {
          provide: MouseServiceDirective,
          useFactory: (): MouseServiceDirective => new MouseServiceDirective(svgRef)
        }
      ],
      declarations: [ GeometryToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
