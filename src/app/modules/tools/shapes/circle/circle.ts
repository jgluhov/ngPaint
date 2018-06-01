import { Shape } from '@shapes/shape';
import { Point2D } from '@math/point2d';
export class CircleShape extends Shape {
  public readonly type = 'circle';
  cx: number;
  cy: number;
  strokeWidth = 2;
  fill = 'none';

  constructor(
    private center: Point2D,
    public r: number = 2,
    public stroke: string = 'black'
  ) {
    super();

    this.cx = center.x;
    this.cy = center.y;
  }

  getRadius(start: Point2D, end: Point2D): number {
    const diff: Point2D = new Point2D(end.x - start.x, end.y - start.y);

    return Math.sqrt((Math.pow(diff.x, 2) + Math.pow(diff.y, 2))) / 2;
  }

  getCenter(start: Point2D, end: Point2D): Point2D {
    return (new Point2D(end.x - start.x, end.y - start.y)).divideBy(2);
  }

  transform(start: Point2D, end: Point2D): void {
    const newCenter = Point2D.add(start, this.getCenter(start, end));

    this.r = this.getRadius(start, end);
    this.cx = newCenter.x;
    this.cy = newCenter.y;
  }
}
