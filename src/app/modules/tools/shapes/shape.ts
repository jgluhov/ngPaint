import { Point2D } from '@math/point2d';
import randomId from 'random-id';
export abstract class Shape {
  public id: string = randomId(10);
  public readonly type: string;
  public stroke = 'black';
  public rendered = false;
  public editing = true;
  public hovered = false;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  abstract transform(start: Point2D, end: Point2D): void;
}
