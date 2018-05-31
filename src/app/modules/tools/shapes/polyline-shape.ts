import { Shape } from './shape';
import { Point2D } from '@math/point2d';

export class PolylineShape extends Shape {
  public readonly type = 'polyline';
  public fill = 'none';
  public strokeLinecap = 'round';

  constructor(
    private points: Point2D[] = [],
    public strokeWidth: number,
    public stroke: string
  ) {
    super();
  }

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }

  public append(p: Point2D): void {
    this.points.push(p);
  }

  public length(): number {
    return this.points.length;
  }

  public transform(): void {
  }
}
