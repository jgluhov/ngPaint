import { PolylineShape } from './polyline-shape';
import { Point2D } from '@math/point2d';

describe('Polyline Shape: Spec', () => {
  let polyline;
  let p1;
  let p2;
  let p3;
  let start;

  beforeEach(() => {
    p1 = new Point2D(10, 50);
    p2 = new Point2D(25, 30);
    p3 = new Point2D(40, 20);
    start = new Point2D(15, 40);

    polyline = new PolylineShape([p1, p2, p3], 0, '#fff');
  });

  describe('#createDragHandler()', () => {
    let dragHandler;
    let end;
    beforeEach(() => {
      dragHandler = polyline.getDragHandler(start);
    });

    describe('when user drags the shape along the axis', () => {
      describe('Ox to 5 and Oy to 5', () => {
        beforeEach(() => {
          end = new Point2D(20, 45);
          dragHandler(end);
        });

        it('should move p1 to 5 along Ox and 5 along Oy', () => {
          expect(polyline.points[0]).toEqual(new Point2D(15, 55));
        });

        it('should move p2 to 5 along Ox and 5 along Oy', () => {
          expect(polyline.points[1]).toEqual(new Point2D(30, 35));
        });

        it('should move p3 to 5 along Ox and 5 along Oy', () => {
          expect(polyline.points[2]).toEqual(new Point2D(45, 25));
        });

        describe('after user continiues dragging the shape', () => {
          beforeEach(() => {
            end = new Point2D(25, 50);
            dragHandler(end);
          });

          it('should move p1 to 10 along Ox and 10 along Oy', () => {
            expect(polyline.points[0]).toEqual(new Point2D(20, 60));
          });

          it('should move p2 to 10 along Ox and 10 along Oy', () => {
            expect(polyline.points[1]).toEqual(new Point2D(35, 40));
          });

          it('should move p3 to 10 along Ox and 5 along Oy', () => {
            expect(polyline.points[2]).toEqual(new Point2D(50, 30));
          });
        });
      });
    });

    afterEach(() => {
      dragHandler = null;
    });
  });

  afterEach(() => {
    p1 = null;
    p2 = null;
    p3 = null;
    polyline = null;
  });
});
