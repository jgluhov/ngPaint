import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import { CanvasComponent } from './canvas.component';
import { CursorableDirective } from '@directives/cursorable/cursorable.directive';
import { AppStoreModule } from '@store/app-store.module';
import { PanelComponent } from '@components/panel/panel.component';
import { ShapeService } from '@tools/services/shape/shape.service';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      declarations: [
        PanelComponent,
        CanvasComponent,
        CursorableDirective
      ],
      providers: [
        ShapeService
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
