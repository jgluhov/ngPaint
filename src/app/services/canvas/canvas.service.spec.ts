import { TestBed, inject } from '@angular/core/testing';
import { CanvasService } from './canvas.service';
import { AppStoreModule } from '@store/app-store.module';

describe('CanvasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      providers: [
        CanvasService
      ]
    });
  });

  it('should be created', inject([CanvasService], (service: CanvasService) => {
    expect(service).toBeTruthy();
  }));
});
