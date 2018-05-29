import { Shape } from './shape';
import { Point2D } from './point2d';

export class CircleShape extends Shape {
  public readonly type = 'circle';
  public fill = 'black';
  public cx: number;
  public cy: number;
  public strokeWidth = 0;

  public rendered = false;

  constructor(
    public center: Point2D,
    public r: number = 2
  ) {
    super();

    this.cx = center.x;
    this.cy = center.y;
  }
}
