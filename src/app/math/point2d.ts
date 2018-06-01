export class Point2D {
  static add(p1: Point2D, p2: Point2D): Point2D {
    return new Point2D(p1.x + p2.x, p1.y + p2.y);
  }

  static getMidpoint(p1: Point2D, p2: Point2D): Point2D {
    return Point2D.getDifference(p1, p2).divideBy(2).add(p1);
  }

  static getDifference(p1: Point2D, p2: Point2D): Point2D {
    return new Point2D(p2.x - p1.x, p2.y - p1.y);
  }

  static size(p1: Point2D): number {
    return Math.sqrt((Math.pow(p1.x, 2) + Math.pow(p1.y, 2)));
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

  add(p: Point2D): this {
    this.x += p.x;
    this.y += p.y;

    return this;
  }
}
