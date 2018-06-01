import { Point2D } from '@math/point2d';

describe('Point2D', () => {
  let p1: Point2D;
  let p2: Point2D;

  describe('#midpoint()', () => {
    describe('when start is less then end', () => {
      it('should return correct center point', () => {
        p1 = new Point2D(0, 0);
        p2 = new Point2D(0, -6);

        expect(Point2D.getMidpoint(p1, p2))
          .toEqual(new Point2D(0, -3));
      });
    });

    describe('when start point is out of center', () => {
      it('should return correct center point', () => {
        p1 = new Point2D(3, 3);
        p2 = new Point2D(5, 3);

        expect(Point2D.getMidpoint(p1, p2))
          .toEqual(new Point2D(4, 3));
      });
    });
  });
});
