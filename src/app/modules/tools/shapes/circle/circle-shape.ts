import { Shape } from '@shapes/shape';
import { Point2D } from '@math';
import { DragHandler } from '../shape';
import {
  SHAPE_DEFAULT_STROKE,
  SHAPE_HOVER_STROKE
} from '@tools/tool-options';

export class CircleShape extends Shape {
  public readonly type = 'circle';
  cx;
  cy;

  constructor(
    public center: Point2D,
    public stroke: string,
    public strokeWidth: number,
    public fill: string = 'none',
    public r: number = 1
  ) {
    super();

    this.cx = center.x;
    this.cy = center.y;
  }

  static composeShape(rawShape: Object): CircleShape {
    Object.setPrototypeOf(rawShape, CircleShape.prototype);

    return <CircleShape>rawShape;
  }

  getRadius(start: Point2D, end: Point2D): number {
    const difference = Point2D.subtract(start, end);

    return Point2D.size(difference.divideBy(2));
  }

  transform(start: Point2D, end: Point2D): this {
    const {x, y}: Point2D = Point2D.getMidpoint(start, end);
    const radius = this.getRadius(start, end);

    this.r = radius;
    this.cx = x;
    this.cy = y;

    return this;
  }

  public getDragHandler(start: Point2D): DragHandler {
    const xStartX = start.x - this.cx;
    const xStartY = start.y - this.cy;

    return (end: Point2D): void => {
      this.cx = end.x - xStartX;
      this.cy = end.y - xStartY;
    };
  }
}
