import { CircleShape } from './circle';
import { Point2D } from '@math/point2d';

describe('CircleShape', () => {
  let point: Point2D;
  let circle: CircleShape;
  let start: Point2D;
  let end: Point2D;

  beforeEach(() => {
    point = new Point2D(0, 0);
    circle = new CircleShape(point);
  });

  describe('#getRadius()', () => {
    describe('when start is less then end', () => {
      it('should return correct radius', () => {
        start = new Point2D(80, 80);
        end = new Point2D(100, 100);

        expect(circle.getRadius(start, end))
          .toBeCloseTo(28.28427124);
      });
    });

    describe('when start is more then end', () => {
      it('should return correct radius', () => {
        start = new Point2D(140, 80);
        end = new Point2D(100, 100);

        expect(circle.getRadius(start, end)).toBeCloseTo(44.721359);
      });
    });
  });

});
