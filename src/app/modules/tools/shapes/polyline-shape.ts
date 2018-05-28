import { Shape } from './shape';
import { Point2D } from './point2d';

export class PolylineShape implements Shape {
  public readonly type = 'polyline';
  public fill = 'none';
  public rendered = false;
  constructor(
    public points: Point2D[] = [],
    public stroke: string = 'black',
    public strokeWidth: number = 3
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
