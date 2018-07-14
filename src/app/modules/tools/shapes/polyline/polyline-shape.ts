import { Shape, DragHandler } from '../shape';
import { Point2D } from '@math';

export class PolylineShape extends Shape {
  readonly type = 'polyline';
  fill = 'none';
  strokeLinecap = 'round';

  constructor(
    public points: Point2D[],
    strokeWidth: number,
    color: string
  ) {
    super();

    this.strokeWidth = strokeWidth;
    this.stroke = color;
  }

  public add = (point: Point2D): void => {
    this.points.push(point);
  }

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }

  public length(): number {
    return this.points.length;
  }

  public transform(): this {
    return this;
  }

  public moveTo(to: Point2D): this {

    return this;
  }

  public move(): this {
    return this;
  }

  public isCorrect(): boolean {
    return this.points.length > 2;
  }

  public getStartXY(start: Point2D): Point2D {
    return new Point2D(start.x, start.y);
  }

  public createDragHandler(start: Point2D): DragHandler {
    const points = this.points
      .map((point: Point2D) => new Point2D(point.x, point.y));

    return (end: Point2D): void => {
      const move = Point2D.subtract(start, end);

      this.points = points.map((point: Point2D) => {
        return new Point2D(point.x + move.x, point.y + move.y);
      });
    };
  }

  public get x(): number {
    return 0;
  }

  public get y(): number {
    return 0;
  }
}
