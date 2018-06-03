import { Point2D } from '@math/point2d';

export abstract class Shape {
  public id: string;
  public readonly type: string;
  public stroke = 'black';
  public rendered = false;
  public editing = true;
  public hovered = false;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  constructor() {
    this.id = crypto.getRandomValues(new Uint32Array(2))
      .toString().replace(',', '');
  }

  abstract transform(start: Point2D, end: Point2D): void;
}
