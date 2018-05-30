import { Point2D } from '@shapes/point2d';
import { Shape } from '@shapes';

export interface BoundingRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class RectShape extends Shape {
  public readonly type = 'rect';
  public x: number;
  public y: number;
  constructor(
    start: Point2D,
    public width: number = 0,
    public height: number = 0,
    public rx: number = 2,
    public ry: number = 2,
    public fill: string = 'none'
  ) {
    super();

    this.x = start.x;
    this.y = start.y;
  }

  transform(boundingRect: BoundingRect): void {
    this.x = boundingRect.x;
    this.y = boundingRect.y;
    this.width = boundingRect.width;
    this.height = boundingRect.height;
  }
}
