import { TestBed, inject } from '@angular/core/testing';
import { MouseService } from './mouse.service';
import { ElementRef } from '@angular/core';

describe('MouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: MouseService,
          useFactory: (): MouseService => new MouseService(new ElementRef(document.createElement('div')))
        }
      ]
    });
  });

  it('should be created', inject([MouseService], (service: MouseService) => {
    expect(service).toBeTruthy();
  }));
});
