import { Shape } from './shape';
import { Point2D } from './point2d';

export class PolylineShape implements Shape {
  public readonly type = 'polyline';
  constructor(
    public points: Point2D[] = [],
    public fill: string = 'none',
    public stroke: string = 'black'
  ) {}

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }

  public is(type: string): boolean {
    return this.type === type;
  }
}
