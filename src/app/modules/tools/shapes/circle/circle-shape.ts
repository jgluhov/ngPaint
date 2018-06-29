import { Shape } from '@shapes/shape';
import { Point2D } from '@math';
import {
  SHAPE_DEFAULT_COLOR,
  SHAPE_HOVER_COLOR
} from '@tools/tool-options';

export class CircleShape extends Shape {
  public readonly type = 'circle';
  cx: number;
  cy: number;
  strokeWidth: number;
  fill = 'none';
  _stroke;

  constructor(
    center: Point2D,
    public r: number = 0,
    thickness: number = 2,
    color: string = SHAPE_DEFAULT_COLOR
  ) {
    super();

    this.stroke = color;
    this.strokeWidth = thickness;
    this.cx = center.x;
    this.cy = center.y;
  }

  getRadius(start: Point2D, end: Point2D): number {
    const difference = Point2D.getDifference(start, end);

    return Point2D.size(difference.divideBy(2));
  }

  transform(start: Point2D, end: Point2D): void {
    const midpoint = Point2D.getMidpoint(start, end);
    const radius = this.getRadius(start, end);

    this.r = radius;
    this.moveTo(midpoint);
  }

  public moveTo(point: Point2D): this {
    this.cx = point.x;
    this.cy = point.y;

    return this;
  }

  get stroke(): string {
    return this.isDragging() ?
      SHAPE_HOVER_COLOR : SHAPE_DEFAULT_COLOR;
  }

  set stroke(color: string) {
    this._stroke = color;
  }

  public move(vector: Point2D): this {

    return this;
  }

  public isCorrect(): boolean {
    return true;
  }

  public get x(): number {
    return this.cx;
  }

  public get y(): number {
    return this.cy;
  }
}
