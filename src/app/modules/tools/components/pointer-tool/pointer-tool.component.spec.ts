import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerToolComponent } from './pointer-tool.component';

describe('PointerToolComponent', () => {
  let component: PointerToolComponent;
  let fixture: ComponentFixture<PointerToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointerToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointerToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
