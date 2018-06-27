import { Point2D } from '@math/point2d';
import { Shape } from '@shapes/shape';
import { TOOL_DEFAULT_COLOR } from '@tools/tool-options';

export interface BoundingRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class RectShape extends Shape {
  public readonly type = 'rect';
  x = 0;
  y = 0;
  fill = 'none';
  strokeWidth;
  width = 0;
  height = 0;
  rx = 2;
  ry = 2;
  stroke;

  constructor(
    start: Point2D,
    thickness: number = 2,
    color: string = TOOL_DEFAULT_COLOR
  ) {
    super();

    this.x = start.x;
    this.y = start.y;
    this.strokeWidth = thickness;
    this.stroke = color;
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

  public isCorrect(): boolean {
    return true;
  }
}
