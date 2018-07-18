import { Shape, DragHandler } from '../shape';
import { Point2D } from '@math';

export class PolylineShape extends Shape {
  readonly type = 'polyline';
  fill = 'none';
  strokeLinecap = 'round';

  constructor(
    public points: Point2D[],
    public strokeWidth: number,
    public stroke: string
  ) {
    super();

    this._strokeWidth = this.strokeWidth;
    this._stroke = this.stroke;
  }

  static composeShape(rawShape: Object): PolylineShape {
    Object.setPrototypeOf(rawShape, PolylineShape.prototype);

    return <PolylineShape>rawShape;
  }

  public addPoint = (point: Point2D): void => {
    this.points.push(point);
  }

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }

  public isCorrect(): boolean {
    return this.points.length > 2;
  }

  public getDragHandler(start: Point2D): DragHandler {
    const points = this.points
      .map((point: Point2D) => new Point2D(point.x, point.y));

    return (end: Point2D): void => {
      const move = Point2D.subtract(start, end);

      this.points = points.map((point: Point2D) => {
        return new Point2D(point.x + move.x, point.y + move.y);
      });
    };
  }
}
