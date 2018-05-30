import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeometryToolComponent } from './geometry-tool.component';
import { MouseServiceDirective } from '@directives/mouse/mouse-service.directive';
import { ElementRef } from '@angular/core';
import { CanvasService } from '@services/canvas/canvas.service';
import { AppStoreModule } from '@store/app-store.module';

describe('GeometryToolComponent', () => {
  let component: GeometryToolComponent;
  let fixture: ComponentFixture<GeometryToolComponent>;

  beforeEach(async(() => {
    const svgRef = new ElementRef(document.createElementNS('http://www.w3.org/2000/svg', 'svg'));

    TestBed.configureTestingModule({
      imports: [
        AppStoreModule
      ],
      providers: [
        CanvasService,
        {
          provide: MouseServiceDirective,
          useFactory: (): MouseServiceDirective => new MouseServiceDirective(svgRef)
        }
      ],
      declarations: [ GeometryToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeometryToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#getBoundingRect()', () => {
    let start = null;
    let end = null;

    describe('when x1 less or equal x2', () => {
      describe('when y1 less or equal y2', () => {
        beforeEach(() => {
          start = { x: 100, y: 100 };
          end = { x: 120, y: 120 };
        });

        it('should return correct bounding rect', () => {
          expect(component.getBoundingRect(start, end)).toEqual({
            x: 100,
            y: 100,
            width: 20,
            height: 20
          });
        });
      });

      describe('when y1 larger then y2', () => {
        beforeEach(() => {
          start = { x: 100, y: 100 };
          end = { x: 120, y: 80 };
        });

        it('should return correct bounding rect', () => {
          expect(component.getBoundingRect(start, end)).toEqual({
            x: 100,
            y: 80,
            width: 20,
            height: 20
          });
        });
      });
    });

    describe('when x1 larger then x2', () => {
      describe('when y1 larger then y2', () => {
        beforeEach(() => {
          start = { x: 100, y: 100 };
          end = { x: 80, y: 80 };
        });

        it('should return correct bounding rect', () => {
          expect(component.getBoundingRect(start, end)).toEqual({
            x: 80,
            y: 80,
            width: 20,
            height: 20
          });
        });
      });
    });

    describe('when x1 larger or equal then x2', () => {
      describe('when y1 less or equal then y2', () => {
        beforeEach(() => {
          start = { x: 100, y: 100 };
          end = { x: 80, y: 120 };
        });

        it('should return correct bounding rect', () => {
          expect(component.getBoundingRect(start, end)).toEqual({
            x: 80,
            y: 100,
            width: 20,
            height: 20
          });
        });
      });
    });
  });
});
