import { Shape } from './shape';
import { Point2D } from '@math';

export class PolylineShape extends Shape {
  readonly type = 'polyline';
  fill = 'none';
  strokeLinecap = 'round';
  points: Point2D[] = [];
  strokeWidth: number;

  constructor(start: Point2D, thickness: number, color: string) {
    super();

    this.append(start);
    this.strokeWidth = thickness;
    this._stroke = color;
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

  public isCorrect(): boolean {
    return this.points.length > 2;
  }

  get stroke(): string {
    return this.isHovered() ? 'red' : this._stroke;
  }

  set stroke(stroke: string) {
    this._stroke = stroke;
  }
}
