import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { ToolbarItemComponent } from '@components/toolbar-item/toolbar-item.component';
import { Http, BaseRequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelComponent } from '@components/panel/panel.component';
import { ToolCursorEnum, ToolGroupEnum, ToolTypeEnum } from '@tools/enums';
import { SHAPE_DEFAULT_STROKE_WIDTH } from '@tools/tool-options';

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
        ToolbarItemComponent
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
      type: ToolTypeEnum.Pencil,
      group: ToolGroupEnum.Default,
      shape: 'polyline',
      cursor: ToolCursorEnum.Default,
      imageUrl: '',
      strokeWidth: SHAPE_DEFAULT_STROKE_WIDTH
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
