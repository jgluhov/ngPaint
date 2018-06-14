import { Shape } from './shape';
import { Point2D } from '@math';

export class PolylineShape extends Shape {
  public readonly type = 'polyline';
  public fill = 'none';
  public strokeLinecap = 'round';

  constructor(
    private points: Point2D[] = [],
    public strokeWidth: number,
    stroke: string
  ) {
    super();

    this._stroke = stroke;
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

  public transform(): this {
    return this;
  }

  public moveTo(): this {
    return this;
  }

  public move(): this {
    return this;
  }

  get stroke(): string {
    return this.isHovered() ? 'red' : this._stroke;
  }

  set stroke(stroke: string) {
    this._stroke = stroke;
  }
}
