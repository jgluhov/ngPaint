export class Point2D {
  static add(p1: Point2D, p2: Point2D): Point2D {
    return new Point2D(p1.x + p2.x, p1.y + p2.y);
  }

  constructor(
    public x: number = 0,
    public y: number = 0
  ) {}

  divideBy(num: number): this {
    this.x = this.x / num;
    this.y = this.y / num;

    return this;
  }
}
