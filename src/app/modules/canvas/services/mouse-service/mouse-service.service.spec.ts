import { TestBed, inject } from '@angular/core/testing';

import { MouseServiceService } from './mouse-service.service';

describe('MouseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MouseServiceService]
    });
  });

  it('should be created', inject([MouseServiceService], (service: MouseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
