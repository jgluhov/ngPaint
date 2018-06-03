import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { ToolbarItemComponent } from '@components/toolbar-item/toolbar-item.component';
import { SvgIconComponent } from '@components/svg-icon/svg-icon.component';
import { Http, BaseRequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from '@components/panel/panel.component';

describe('ToolItemComponent', () => {
  let component: ToolbarItemComponent;
  let fixture: ComponentFixture<ToolbarItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule
      ],
      declarations: [
        PanelComponent,
        ToolbarItemComponent,
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
    fixture = TestBed.createComponent(ToolbarItemComponent);
    component = fixture.componentInstance;
    component.tool = {
      name: 'pencil',
      component: class SomeComponent {},
      type: 'polyline',
      imageUrl: ''
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
