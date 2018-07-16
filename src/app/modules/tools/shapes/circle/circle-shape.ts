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
    stroke: string,
    public strokeWidth: number,
    public fill: string = 'none',
    public r: number = 1
  ) {
    super();

    this.stroke = stroke;
    this.cx = center.x;
    this.cy = center.y;
  }

  static composeShape(rawShape: CircleShape): CircleShape {
    return new CircleShape(
      new Point2D(rawShape.cx, rawShape.cy),
      rawShape._stroke,
      rawShape._strokeWidth,
      rawShape.fill,
      rawShape.r
    );
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

  public createDragHandler(start: Point2D): DragHandler {
    const xStartX = start.x - this.x;
    const xStartY = start.y - this.y;

    return (end: Point2D): void => {
      this.x = end.x - xStartX;
      this.y = end.y - xStartY;
    };
  }

  public get x(): number {
    return this.cx;
  }

  public set x(value: number) {
    this.cx = value;
  }

  public get y(): number {
    return this.cy;
  }

  public set y(value: number) {
    this.cy = value;
  }
}
