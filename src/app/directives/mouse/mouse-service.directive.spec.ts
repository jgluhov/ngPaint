import { MouseServiceDirective } from './mouse-service.directive';
import { ElementRef } from '@angular/core';
import { of } from 'rxjs';

describe('Mouse Service Directive', () => {
  let svgRef = null;
  let socketServiceMock;
  let userServiceMock;
  let guiServiceMock;

  beforeEach(() => {
    socketServiceMock = {
      socket$: of(42),
      send: (): void => {}
    };
    userServiceMock = {
      changeState: (): void => {},
      users$: of({})
    };
    guiServiceMock = {
      tool$: of({})
    };
    svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));
  });

  it('should create an instance', () => {
    const directive = new MouseServiceDirective(svgRef, socketServiceMock, userServiceMock, guiServiceMock);
    expect(directive).toBeTruthy();
  });
});
