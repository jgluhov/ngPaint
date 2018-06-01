import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { ControlToolComponent } from './control-tool.component';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { CanvasService } from '@services/canvas/canvas.service';
import { AppStoreModule } from '@store/app-store.module';

describe('ControlToolComponent', () => {
  let component: ControlToolComponent;
  let fixture: ComponentFixture<ControlToolComponent>;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    TestBed.configureTestingModule({
      imports: [ AppStoreModule ],
      declarations: [ ControlToolComponent ],
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
    fixture = TestBed.createComponent(ControlToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
