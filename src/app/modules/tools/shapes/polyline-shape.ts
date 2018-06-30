import { Shape, DragHandler } from './shape';
import { Point2D } from '@math';

export class PolylineShape extends Shape {
  readonly type = 'polyline';
  fill = 'none';
  strokeLinecap = 'round';
  points: Point2D[] = [];
  strokeWidth: number;
  stroke: string;

  constructor(start: Point2D, thickness: number, color: string) {
    super();

    this.append(start);
    this.strokeWidth = thickness;
    this.stroke = color;
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
    return (point: Point2D): void => {

    };
  }

  public get x(): number {
    return 0;
  }

  public get y(): number {
    return 0;
  }
}
