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

  constructor(
    public x: number = 0,
    public y: number = 0,
    public width: number = 0,
    public height: number = 0,
    public rx: number = 2,
    public ry: number = 2,
    public fill: string = 'none',
    public strokeWidth: number = 2
  ) {
    super();
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
    const p = new Point2D(x, y);

    this.moveTo(p);
    this.setSize(width, height);
  }

  public moveTo(point: Point2D): this {
    this.x = point.x;
    this.y = point.y;

    return this;
  }

  public move(vector: Point2D): this {

    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  private setSize(width: number, height: number): this {
    this.width = width;
    this.height = height;

    return this;
  }
}
