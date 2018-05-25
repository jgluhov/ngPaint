import { TestBed, inject } from '@angular/core/testing';
import { MouseService } from './mouse.service';
import { ElementRef, Provider } from '@angular/core';

function provideMouseService(): Provider {
  const container = document.createElement('div');
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('id', 'svg');
  container.appendChild(svg);
  const elRef = new ElementRef(container);

  return {
    provide: MouseService,
    useFactory: (): MouseService => new MouseService(elRef)
  };
}

describe('MouseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMouseService()
      ]
    });
  });

  it('should be created', inject([MouseService], (service: MouseService) => {
    expect(service).toBeTruthy();
  }));
});
