import { Shape, DragHandler } from '../shape';
import { Point2D } from '@math';
import { SHAPE_HOVER_COLOR } from '../../tool-options';

export class PolylineShape extends Shape {
  readonly type = 'polyline';
  fill = 'none';
  strokeLinecap = 'round';
  points: Point2D[] = [];
  strokeWidth: number;
  _stroke;

  constructor(points: Point2D[], thickness: number, color: string) {
    super();

    points.forEach(this.append);
    this.strokeWidth = thickness;
    this.stroke = color;
  }

  public toString(): string {
    return this.points
      .map((point: Point2D) => `${point.x},${point.y}`)
      .join(' ');
  }

  public append = (p: Point2D): void => {
    this.points.push(p);
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
    const points = this.points.map((point: Point2D) => new Point2D(point.x, point.y));

    console.log('initial points', points);

    return (end: Point2D): void => {
      const move = Point2D.subtract(start, end);

      // console.log('this.points before', this.points);
      console.log('move', move);

      this.points = points.map((point: Point2D) => {
        return new Point2D(point.x + move.x, point.y + move.y);
      });

      // console.log('this.points after', this.points);
    };
  }

  public get stroke(): string {
    return this.isDragging() ?
      SHAPE_HOVER_COLOR : this._stroke;
  }

  public set stroke(value: string) {
    this._stroke = value;
  }

  public get x(): number {
    return 0;
  }

  public get y(): number {
    return 0;
  }
}
