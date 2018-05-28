import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Provider } from '@angular/core';
import { DrawingToolComponent } from './drawing-tool.component';
import { CanvasComponent } from '@components/canvas/canvas.component';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
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
          provide: MouseTrackerDirective,
          useFactory: (): MouseTrackerDirective => new MouseTrackerDirective(svgRef)
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
