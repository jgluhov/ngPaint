import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef, Provider } from '@angular/core';
import { PencilComponent } from './pencil.component';
import { CanvasComponent } from '@components/canvas/canvas.component';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { ShapeService } from '@tools/services/shape/shape.service';
import { AppStoreModule } from '@store/app-store.module';

describe('PencilComponent', () => {
  let component: PencilComponent;
  let fixture: ComponentFixture<PencilComponent>;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      declarations: [
        PencilComponent
      ],
      providers: [
        ShapeService,
        {
          provide: MouseTrackerDirective,
          useFactory: (): MouseTrackerDirective => new MouseTrackerDirective(svgRef)
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PencilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
