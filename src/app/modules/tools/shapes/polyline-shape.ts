import { Shape } from './shape';
import { Point2D } from './point2d';

export class PolylineShape extends Shape {
  public readonly type = 'polyline';
  public fill = 'none';
  public strokeWidth = 3;

  constructor(private points: Point2D[] = []) {
    super();
  }

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }

  public add(p: Point2D): void {
    this.points.push(p);
  }

  public length(): number {
    return this.points.length;
  }
}
