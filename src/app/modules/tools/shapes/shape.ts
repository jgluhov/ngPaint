import { Point2D } from '@math/point2d';

export abstract class Shape {
  public readonly type: string;
  public stroke = 'black';
  public rendered = false;
  public editing = true;
  public hovered = false;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  public hover(): this {
    this.hovered = true;

    return this;
  }

  public blur(): this {
    this.hovered = false;

    return this;
  }

  abstract transform(start: Point2D, end: Point2D): void;
}
