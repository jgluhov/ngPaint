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

});
