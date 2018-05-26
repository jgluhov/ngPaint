import { Shape } from './shape';
import { Point2D } from './point2d';

export class PolylineShape implements Shape {
  readonly type = 'polyline';
  public fill = 'none';
  public stroke = 'black';
  constructor(private points: Point2D[] = []) {
  }

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }
}
