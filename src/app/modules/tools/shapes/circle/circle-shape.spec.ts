import { CircleShape } from './circle-shape';
import { Point2D } from '@math/point2d';

describe('CircleShape', () => {
  let point: Point2D;
  let circle: CircleShape;
  let start: Point2D;
  let end: Point2D;

  beforeEach(() => {
    point = new Point2D(0, 0);
    circle = new CircleShape(point, '', 0);
  });

  describe('#getRadius()', () => {
    describe('when start is less then end', () => {
      it('should return correct radius', () => {
        start = new Point2D(0, 0);
        end = new Point2D(0, -6);

        expect(circle.getRadius(start, end))
          .toBeCloseTo(3);
      });
    });

    describe('when start is more then end', () => {
      it('should return correct radius', () => {
        start = new Point2D(140, 80);
        end = new Point2D(100, 100);

        expect(circle.getRadius(start, end)).toBeCloseTo(22.3606);
      });
    });
  });

  afterEach(() => {
    point = null;
    circle = null;
    start = null;
    end = null;
  });
});
