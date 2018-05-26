import { MouseTrackerDirective } from './mouse-tracker.directive';
import { ElementRef } from '@angular/core';

describe('MouseTrackerDirective', () => {
  let svgRef = null;

  beforeEach(() => {
    svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
  });

  it('should create an instance', () => {
    const directive = new MouseTrackerDirective(svgRef);
    expect(directive).toBeTruthy();
  });
});
