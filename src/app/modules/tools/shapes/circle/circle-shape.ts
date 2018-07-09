import { Shape } from '@shapes/shape';
import { Point2D } from '@math';
import { DragHandler } from '../shape';
import {
  SHAPE_DEFAULT_STROKE,
  SHAPE_HOVER_STROKE
} from '@tools/tool-options';

export class CircleShape extends Shape {
  public readonly type = 'circle';
  cx;
  cy;
  _stroke;

  constructor(
    public center: Point2D,
    stroke: string,
    public strokeWidth: number,
    public fill: string = 'none',
    public r: number = 1
  ) {
    super();

    this.stroke = stroke;
    this.cx = center.x;
    this.cy = center.y;
  }

  getRadius(start: Point2D, end: Point2D): number {
    const difference = Point2D.subtract(start, end);

    return Point2D.size(difference.divideBy(2));
  }

  transform(start: Point2D, end: Point2D): void {
    const midpoint = Point2D.getMidpoint(start, end);
    const radius = this.getRadius(start, end);

    this.r = radius;
    this.moveTo(midpoint);
  }

  public moveTo(to: Point2D): this {
    this.cx = to.x;
    this.cy = to.y;

    return this;
  }

  public getStartXY(start: Point2D): Point2D {
    return new Point2D(start.x - this.x, start.y - this.y);
  }

  public createDragHandler(start: Point2D): DragHandler {
    const xStartX = start.x - this.x;
    const xStartY = start.y - this.y;

    return (end: Point2D): void => {
      this.x = end.x - xStartX;
      this.y = end.y - xStartY;
    };
  }

  get stroke(): string {
    return this.isDragging() ?
      SHAPE_HOVER_STROKE : this._stroke;
  }

  set stroke(color: string) {
    this._stroke = color;
  }

  public isCorrect(): boolean {
    return true;
  }

  public get x(): number {
    return this.cx;
  }

  public set x(value: number) {
    this.cx = value;
  }

  public get y(): number {
    return this.cy;
  }

  public set y(value: number) {
    this.cy = value;
  }
}
