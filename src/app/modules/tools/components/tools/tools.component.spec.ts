import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolsComponent } from './tools.component';
import { GeneralModule } from '../../../../general/general.module';
import { TOOLS_TOKEN, tools } from './tools';
import { AppStoreModule } from '@store/app-store.module';
import { ToolItemComponent } from '../tool-item/tool-item.component';
import { CursorableDirective } from '@tools/directives/cursorable/cursorable.directive';

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
        ToolsComponent,
        ToolItemComponent,
        CursorableDirective
      ],
      providers: [
        {
          provide: TOOLS_TOKEN, useValue: tools
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
