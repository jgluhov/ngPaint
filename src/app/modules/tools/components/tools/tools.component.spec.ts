import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsComponent } from './tools.component';
import { GeneralModule } from '../../../../general/general.module';
import { TOOL_LIST_TOKEN, toolList } from './tools-list';
import { AppStoreModule } from '@store/app-store.module';

describe('ToolsComponent', () => {
  let component: ToolsComponent;
  let fixture: ComponentFixture<ToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        GeneralModule,
        BrowserAnimationsModule,
        AppStoreModule
      ],
      declarations: [
        ToolsComponent
      ],
      providers: [
        {
          provide: TOOL_LIST_TOKEN, useValue: toolList
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
