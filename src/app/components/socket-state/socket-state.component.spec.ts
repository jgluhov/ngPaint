import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketStateComponent } from './socket-state.component';

describe('SocketStateComponent', () => {
  let component: SocketStateComponent;
  let fixture: ComponentFixture<SocketStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocketStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
