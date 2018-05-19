import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { ToolItemComponent } from './tool-item.component';
import { SvgIconComponent } from '../../../../general/svg-icon/svg-icon.component';
import { Http, BaseRequestOptions } from '@angular/http';
import { Tool } from '@models/tool';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ToolItemComponent', () => {
  let component: ToolItemComponent;
  let fixture: ComponentFixture<ToolItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      declarations: [
        ToolItemComponent,
        SvgIconComponent
      ],
      providers: [
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
    fixture = TestBed.createComponent(ToolItemComponent);
    component = fixture.componentInstance;
    component.tool = new Tool('some', class {});
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
