import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryToolComponent } from './geometry-tool.component';

describe('GeometryToolComponent', () => {
  let component: GeometryToolComponent;
  let fixture: ComponentFixture<GeometryToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
