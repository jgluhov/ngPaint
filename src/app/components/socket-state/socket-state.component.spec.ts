import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocketStateComponent } from './socket-state.component';
import { SocketService } from '../../services/socket/socket.service';
import { of, Observable } from 'rxjs';

describe('SocketStateComponent', () => {
  let component: SocketStateComponent;
  let fixture: ComponentFixture<SocketStateComponent>;
  let mockSocketService;
  beforeEach(async(() => {

    mockSocketService = {
      getConnectionState: (): Observable<boolean> => of(true)
    };

    TestBed.configureTestingModule({
      declarations: [ SocketStateComponent ],
      providers: [
        {
          provide: SocketService, useValue: mockSocketService
        }
      ]
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
