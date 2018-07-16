import { TestBed, inject } from '@angular/core/testing';

import { SocketService } from './socket.service';
import { CanvasService } from '@services/canvas/canvas.service';

describe('SocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketService, CanvasService]
    });
  });

  it('should be created', inject([SocketService], (service: SocketService) => {
    expect(service).toBeTruthy();
  }));
});
