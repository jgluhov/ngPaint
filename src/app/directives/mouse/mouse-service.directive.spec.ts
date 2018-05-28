import { MouseServiceDirective } from './mouse-service.directive';
import { ElementRef } from '@angular/core';

describe('MouseTrackerDirective', () => {
  let svgRef = null;

  beforeEach(() => {
    svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
  });

  it('should create an instance', () => {
    const directive = new MouseServiceDirective(svgRef);
    expect(directive).toBeTruthy();
  });
});
