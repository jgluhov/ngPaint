import { Point2D } from '@math/point2d';
import { Shape } from '@shapes/shape';

export interface BoundingRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class RectShape extends Shape {
  public readonly type = 'rect';
  public x: number;
  public y: number;
  constructor(
    start: Point2D,
    public width: number = 0,
    public height: number = 0,
    public rx: number = 2,
    public ry: number = 2,
    public fill: string = 'none',
    public strokeWidth: number = 2
  ) {
    super();

    this.x = start.x;
    this.y = start.y;
  }

  getBoundingRect(start: Point2D, end: Point2D): BoundingRect {
    if (start.x <= end.x && start.y <= end.y) {
      return {
        x: start.x,
        y: start.y,
        width: end.x - start.x,
        height: end.y - start.y
      };
    }

    if (start.x <= end.x && start.y > end.y) {
      return {
        x: start.x,
        y: end.y,
        width: end.x - start.x,
        height: start.y - end.y
      };
    }

    if (start.x >= end.x && start.y > end.y) {
      return {
        x: end.x,
        y: end.y,
        width: start.x - end.x,
        height: start.y - end.y
      };
    }

    if (start.x >= end.x && start.y <= end.y) {
      return {
        x: end.x,
        y: start.y,
        width: start.x - end.x,
        height: end.y - start.y
      };
    }
  }

  transform(start: Point2D, end: Point2D): void {

    const { x, y, width, height }: BoundingRect = this.getBoundingRect(start, end);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
