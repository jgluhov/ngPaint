import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { CanvasComponent } from './canvas.component';
import { GeneralModule } from '../../../../general/general.module';
import { CursorableDirective } from '../../directives/cursorable/cursorable.directive';
import { AppStoreModule } from '../../../../store/app-store.module';

describe('CanvasComponent', () => {
  let component: CanvasComponent;
  let fixture: ComponentFixture<CanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GeneralModule,
        AppStoreModule
      ],
      declarations: [
        CanvasComponent,
        CursorableDirective
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
