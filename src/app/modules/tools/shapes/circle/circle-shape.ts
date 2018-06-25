import { Shape } from '@shapes/shape';
import { Point2D } from '@math';
import { ShapeStateEnum } from '@tools/enums';
import { TOOL_DEFAULT_COLOR } from '@tools/tool-options';

export class CircleShape extends Shape {
  public readonly type = 'circle';
  cx: number;
  cy: number;
  strokeWidth: number;
  fill = 'none';

  constructor(
    center: Point2D,
    public r: number = 0,
    thickness: number = 2,
    color: string = TOOL_DEFAULT_COLOR
  ) {
    super();

    this._stroke = color;
    this.fill = color;
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

  get stroke(): string {
    if (this.parent) {
      return this.parent.stroke;
    }

    return this.isHovered() ? 'red' : this._stroke;
  }

  set stroke(stroke: string) {
    this._stroke = stroke;
  }

  public moveTo(point: Point2D): this {
    this.cx = point.x;
    this.cy = point.y;

    return this;
  }

  public move(vector: Point2D): this {

    return this;
  }

  public isCorrect(): boolean {
    return true;
  }
}
