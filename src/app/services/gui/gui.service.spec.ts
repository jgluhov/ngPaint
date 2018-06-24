import { TestBed, inject } from '@angular/core/testing';
import { GuiService } from './gui.service';
import { TOOL_LIST_TOKEN, toolList } from '@tools/tool-list';

describe('GuiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuiService,
        {
          provide: TOOL_LIST_TOKEN, useValue: toolList
        }
      ]
    });
  });

  it('should be created', inject([GuiService], (service: GuiService) => {
    expect(service).toBeTruthy();
  }));
});
