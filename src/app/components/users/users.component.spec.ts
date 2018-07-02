import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { PanelComponent } from '@components/panel/panel.component';
import { SvgIconComponent } from '@components';
import { SocketService } from '@services';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions, Http } from '@angular/http';
import { of } from 'rxjs';

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
        SvgIconComponent
      ],
      providers: [
        {
          provide: SocketService, useValue: mockSocketService
        },
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (
            backend: MockBackend,
            options: BaseRequestOptions
          ): Http => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
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
