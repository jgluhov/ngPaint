import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef } from '@angular/core';
import { PencilComponent } from './pencil.component';
import { CanvasComponent } from '../../../canvas/components/canvas/canvas.component';

describe('PencilComponent', () => {
  let component: PencilComponent;
  let fixture: ComponentFixture<PencilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PencilComponent
      ],
      providers: [
        {
          provide: 'WorkSpace',
          useValue: new ElementRef(document.createElement('svg'))
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
