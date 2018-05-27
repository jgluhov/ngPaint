import { Shape } from './shape';
import { Point2D } from './point2d';
import uuid from 'uuid';

export class PolylineShape implements Shape {
  public readonly id = uuid();
  public readonly type = 'polyline';
  public fill = 'none';
  public temporary = true;
  constructor(
    public points: Point2D[] = [],
    public stroke: string = 'black',
    public strokeWidth: number = 2
  ) {}

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }

  public is(type: string): boolean {
    return this.type === type;
  }

  public complete(): this {
    this.temporary = false;

    return this;
  }
}
