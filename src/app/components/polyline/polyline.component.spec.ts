import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PolylineComponent } from './polyline.component';
import { CanvasService } from '@services/canvas/canvas.service';
import { AppStoreModule } from '@store/app-store.module';

describe('ToolItemComponent', () => {
  let component: PolylineComponent;
  let fixture: ComponentFixture<PolylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      declarations: [
        PolylineComponent
      ],
      providers: [
        CanvasService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
