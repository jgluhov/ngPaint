import { Shape } from './shape';
import { Point2D } from './point2d';
import uuid from 'uuid';

export class CircleShape implements Shape {
  public readonly id = uuid();
  public readonly type = 'circle';
  public fill = 'black';
  public temporary = false;
  constructor(
    public x: number = 0,
    public y: number = 0,
    public r: number = 2,
    public stroke: string = 'black',
    public strokeWidth: number = 0
  ) {}

  public is(type: string): boolean {
    return this.type === type;
  }

  public complete(): this {
    this.temporary = false;

    return this;
  }
}
