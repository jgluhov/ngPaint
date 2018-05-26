import { TestBed, inject } from '@angular/core/testing';

import { ShapeService } from './shape.service';
import { AppStoreModule } from '@store/app-store.module';

describe('ShapeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ AppStoreModule ],
      providers: [
        ShapeService
      ]
    });
  });

  it('should be created', inject([ShapeService], (service: ShapeService) => {
    expect(service).toBeTruthy();
  }));
});
