import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions } from '@angular/http';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarItemComponent } from '../toolbar-item/toolbar-item.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { PanelComponent } from '../panel/panel.component';
import { ToolsModule } from '@modules';
import { AppStoreModule } from '@store/app-store.module';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PanelComponent,
        ToolbarComponent,
        ToolbarItemComponent,
        SvgIconComponent
      ],
      imports: [
        ToolsModule,
        AppStoreModule
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
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
