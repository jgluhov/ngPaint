import { TestBed, inject } from '@angular/core/testing';
import { MouseService, provideMouseService } from './mouse.service';
import { ElementRef } from '@angular/core';

describe('MouseService', () => {
  beforeEach(() => {
    const elRef = new ElementRef(document.createElement('div'));
    TestBed.configureTestingModule({
      providers: [
        provideMouseService(elRef)
      ]
    });
  });

  it('should be created', inject([MouseService], (service: MouseService) => {
    expect(service).toBeTruthy();
  }));
});
