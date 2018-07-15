import { MouseServiceDirective } from './mouse-service.directive';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';

describe('MouseTrackerDirective', () => {
  let svgRef = null;
  let socketServiceMock;

  beforeEach(() => {
    socketServiceMock = {
      socket$: of(42),
      send: (): void => {}
    };
    svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
  });

  it('should create an instance', () => {
    const directive = new MouseServiceDirective(svgRef, socketServiceMock);
    expect(directive).toBeTruthy();
  });
});
