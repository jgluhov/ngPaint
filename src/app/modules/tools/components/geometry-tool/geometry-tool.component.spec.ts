import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryToolComponent } from './geometry-tool.component';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { ElementRef } from '@angular/core';
import { CanvasService } from '@services/canvas/canvas.service';
import { AppStoreModule } from '@store/app-store.module';

describe('GeometryToolComponent', () => {
  let component: GeometryToolComponent;
  let fixture: ComponentFixture<GeometryToolComponent>;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      providers: [
        CanvasService,
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
