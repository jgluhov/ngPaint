import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RectComponent } from './rect.component';
import { CanvasService } from '@services/canvas/canvas.service';

describe('RectComponent', () => {
  let component: RectComponent;
  let fixture: ComponentFixture<RectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RectComponent ],
      providers: [
        CanvasService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
