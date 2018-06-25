import { RectShape } from './rect-shape';
import { Point2D } from '@math';

describe('RectShape', () => {
  let rect: RectShape;

  beforeEach(() => {
    rect = new RectShape(new Point2D(0, 0));
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
          expect(rect.getBoundingRect(start, end)).toEqual({
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
          expect(rect.getBoundingRect(start, end)).toEqual({
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
          expect(rect.getBoundingRect(start, end)).toEqual({
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
          expect(rect.getBoundingRect(start, end)).toEqual({
            x: 80,
            y: 100,
            width: 20,
            height: 20
          });
        });
      });
    });
  });

  describe('#move()', () => {

    describe('when user just click on rect', () => {
      it('should not move at all', () => {
        rect.move(new Point2D(0, 0));

        expect(rect.x).toBe(0);
        expect(rect.y).toBe(0);
      });
    });

    describe('when we drag rect by the down side', () => {
      describe('move it to the right side', () => {
        it('should the rect be moved to the right side by 10', () => {
          rect.move(new Point2D(10, 0));

          expect(rect.x).toBe(10);
          expect(rect.y).toBe(0);
        });
      });

      describe('move it to the left side', () => {
        it('should the rect be moved to the left side by 10', () => {
          rect.move(new Point2D(-10, 0));

          expect(rect.x).toBe(-10);
          expect(rect.y).toBe(0);
        });
      });

      describe('move it to the south west side', () => {
        it('should the rect be moved to the south west side correctly', () => {
          rect.move(new Point2D(10, 10));

          expect(rect.x).toBe(10);
          expect(rect.y).toBe(10);
        });
      });
    });

  });

});
