import { Shape } from './shape';
import { Point2D } from './point2d';

export class CircleShape implements Shape {
  public readonly type = 'circle';
  public fill = 'black';
  public rendered = false;
  public cx: number;
  public cy: number;
  constructor(
    public p: Point2D,
    public r: number = 2,
    public stroke: string = 'black',
    public strokeWidth: number = 0
  ) {
    this.cx = p.x;
    this.cy = p.y;
  }

  public is(type: string): boolean {
    return this.type === type;
  }
}
