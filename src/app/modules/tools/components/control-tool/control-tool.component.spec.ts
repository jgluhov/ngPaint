import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { MouseServiceDirective } from '@directives';
import { CanvasService, SocketService } from '@services';
import { ControlToolComponent } from './control-tool.component';
import { GuiService } from '@services/gui/gui.service';
import { of } from 'rxjs/observable/of';

describe('ControlToolComponent', () => {
  let component: ControlToolComponent;
  let fixture: ComponentFixture<ControlToolComponent>;
  let socketServiceMock;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    socketServiceMock = {
      socket$: of(42),
      send: (): void => {}
    };
    TestBed.configureTestingModule({
      declarations: [ ControlToolComponent ],
      providers: [
        CanvasService,
        GuiService,
        SocketService,
        {
          provide: MouseServiceDirective,
          useFactory: (): MouseServiceDirective => new MouseServiceDirective(svgRef, socketServiceMock)
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
