import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SocketService } from '@services';

describe('AppComponent', () => {
  let socketServiceMock;
  beforeEach(async(() => {
    socketServiceMock = {};

    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: SocketService, useValue: socketServiceMock
        }
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
