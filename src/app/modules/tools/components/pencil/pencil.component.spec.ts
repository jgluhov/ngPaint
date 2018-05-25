import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { PencilComponent } from './pencil.component';
import { CanvasComponent } from '@components/canvas/canvas.component';
import { MouseService, provideMouseService } from '@services/mouse/mouse.service';

describe('PencilComponent', () => {
  let component: PencilComponent;
  let fixture: ComponentFixture<PencilComponent>;

  beforeEach(async(() => {
    const elRef = new ElementRef(document.createElement('div'));
    TestBed.configureTestingModule({
      declarations: [
        PencilComponent
      ],
      providers: [
        provideMouseService(elRef)
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
