import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { PanelComponent } from '@components/panel/panel.component';
import { SocketService } from '@services';
import { of } from 'rxjs';
import { UserComponent } from '@components/user/user.component';
import { SocketStateComponent } from '../socket-state/socket-state.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let mockSocketService;
  beforeEach(async(() => {
    mockSocketService = {
      connectionState$: of()
    };

    TestBed.configureTestingModule({
      declarations: [
        PanelComponent,
        UsersComponent,
        UserComponent,
        SocketStateComponent
      ],
      providers: [
        {
          provide: SocketService, useValue: mockSocketService
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
