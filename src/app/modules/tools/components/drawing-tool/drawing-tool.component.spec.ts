import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { DrawingToolComponent } from './drawing-tool.component';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { CanvasService } from '@services/canvas/canvas.service';
import { AppStoreModule } from '@store/app-store.module';

describe('DrawingToolComponent', () => {
  let component: DrawingToolComponent;
  let fixture: ComponentFixture<DrawingToolComponent>;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      declarations: [
        DrawingToolComponent
      ],
      providers: [
        CanvasService,
        {
          provide: MouseServiceDirective,
          useFactory: (): MouseServiceDirective => new MouseServiceDirective(svgRef)
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
