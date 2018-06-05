import { Point2D } from '@math/point2d';

export abstract class Shape {
  public id: string;
  public readonly type: string;
  public _stroke = 'black';
  public rendered = false;
  public editing = true;
  public hovered = false;
  public parent: Shape = null;
  public child: Shape = null;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  constructor() {
    this.id = crypto.getRandomValues(new Uint32Array(2))
      .toString().replace(',', '');
  }

  public setChild(shape: Shape): void {
    this.child = shape;
  }

  public setParent(shape: Shape): void {
    this.parent = shape;
  }

  get stroke(): string {
    return this.hovered ? 'red' : this._stroke;
  }

  set stroke(stroke: string) {
    this._stroke = stroke;
  }

  abstract transform(start: Point2D, end: Point2D): void;
  abstract moveTo(point: Point2D): this;
}
