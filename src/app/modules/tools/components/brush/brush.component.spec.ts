import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrushComponent } from './brush.component';
import { ElementRef } from '@angular/core';
import { AppStoreModule } from '@store/app-store.module';
import { ShapeService } from '@tools/services/shape/shape.service';
import { MouseTrackerDirective } from '@directives/mouse-tracker/mouse-tracker.directive';
import { ShapeFactory } from '@shapes/shape';

describe('BrushComponent', () => {
  let component: BrushComponent;
  let fixture: ComponentFixture<BrushComponent>;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      declarations: [ BrushComponent ],
      providers: [
        ShapeFactory,
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
    fixture = TestBed.createComponent(BrushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
