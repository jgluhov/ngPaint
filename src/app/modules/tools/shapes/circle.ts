import { Shape } from './shape';
import { Point2D } from './point2d';

export class CircleShape implements Shape {
  public readonly type = 'circle';
  public fill = 'black';
  constructor(
    public x: number = 0,
    public y: number = 0,
    public r: number = 1,
    public stroke: string = 'black',
    public strokeWidth: number = 0
  ) {}

  public is(type: string): boolean {
    return this.type === type;
  }
}
