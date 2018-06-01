import { Point2D } from '@math/point2d';

export abstract class Shape {
  public readonly type: string;
  public stroke = 'black';
  public rendered = false;
  public editing = true;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  abstract transform(start: Point2D, end: Point2D): void;
}
