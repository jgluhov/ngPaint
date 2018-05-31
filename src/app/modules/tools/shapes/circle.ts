import { Shape } from './shape';
export class CircleShape extends Shape {
  public readonly type = 'circle';
  public strokeWidth = 0;

  public rendered = false;

  constructor(
    public cx: number,
    public cy: number,
    public r: number,
    public fill: string = 'black'
  ) {
    super();
  }
}
