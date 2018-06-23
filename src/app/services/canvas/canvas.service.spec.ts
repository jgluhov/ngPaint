import { TestBed, inject } from '@angular/core/testing';
import { CanvasService } from './canvas.service';
import { GuiService } from '@services/gui/gui.service';

describe('CanvasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CanvasService,
        GuiService
      ]
    });
  });

  it('should be created', inject([CanvasService], (service: CanvasService) => {
    expect(service).toBeTruthy();
  }));
});
