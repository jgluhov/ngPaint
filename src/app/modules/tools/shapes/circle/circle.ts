import { Shape } from '@shapes/shape';
import { Point2D } from '@math/point2d';
export class CircleShape extends Shape {
  public readonly type = 'circle';
  cx: number;
  cy: number;

  constructor(
    private center: Point2D,
    public r: number = 0,
    public fill: string = 'none',
    public strokeWidth: number = 2
  ) {
    super();

    this.cx = center.x;
    this.cy = center.y;
  }

  getRadius(start: Point2D, end: Point2D): number {
    const difference = Point2D.getDifference(start, end);

    return Point2D.size(difference.divideBy(2));
  }

  moveTo(p: Point2D): this {
    this.cx = p.x;
    this.cy = p.y;

    return this;
  }

  transform(start: Point2D, end: Point2D): void {
    const midpoint = Point2D.getMidpoint(start, end);
    const radius = this.getRadius(start, end);

    this.r = radius;
    this.moveTo(midpoint);
  }

  get stroke(): string {
    return  this.parent ?
      this.parent.stroke : this._stroke;
  }

  set stroke(stroke: string) {
    this._stroke = stroke;
  }
}
