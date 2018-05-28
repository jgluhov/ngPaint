import { Shape } from './shape';
import { Point2D } from './point2d';

export class PolylineShape extends Shape {
  public readonly type = 'polyline';
  public fill = 'none';
  public rendered = false;
  constructor(
    public points: Point2D[] = [],
    public stroke: string = 'black',
    public strokeWidth: number = 3
  ) {
    super();
  }

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }
}
