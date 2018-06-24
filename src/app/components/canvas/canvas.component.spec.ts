import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CanvasComponent } from './canvas.component';
import { CursorableDirective } from '@directives/cursorable/cursorable.directive';
import { PanelComponent } from '@components/panel/panel.component';
import { CanvasService } from '@services/canvas/canvas.service';
import { PolylineComponent } from '@components/polyline/polyline.component';
import { CircleComponent } from '../circle/circle.component';
import { RectComponent } from '../rect/rect.component';
import { toolList, TOOL_LIST_TOKEN } from '@tools';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelComponent,
        CanvasComponent,
        CursorableDirective,
        PolylineComponent,
        CircleComponent,
        RectComponent
      ],
      providers: [
        CanvasService,
        { provide: TOOL_LIST_TOKEN, useValue: toolList }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
