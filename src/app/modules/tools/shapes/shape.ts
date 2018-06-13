import { Point2D } from '@math';
import { ShapeStates } from '@tools/types/shape-states';

export abstract class Shape {
  public readonly id: string;
  public readonly type: string;
  public _stroke = 'black';
  public rendered = false;
  public editing = true;
  public hovered = false;
  public parent: Shape = null;
  public state: ShapeStates = ShapeStates.EDITING;
  public children: Shape[] = [];

  static relate(parent: Shape, ...children: Shape[]): void {
    children.forEach((child: Shape) => {
      parent.addChild(child);
      child.setParent(parent);
    });
  }

  public ofType(type: string): boolean {
    return this.type === type;
  }

  constructor() {
    this.id = crypto.getRandomValues(new Uint32Array(2))
      .toString().replace(',', '');
  }

  public addChild = (shape: Shape): void => {
    this.children.push(shape);
  }

  public setParent = (shape: Shape): void => {
    this.parent = shape;
  }

  public isStable(): boolean {
    return this.state === ShapeStates.STABLE;
  }

  public isEditing(): boolean {
    return this.state === ShapeStates.EDITING;
  }

  public isHovered(): boolean {
    return this.state === ShapeStates.HOVERED;
  }

  get stroke(): string {
    return this.hovered ? 'red' : this._stroke;
  }

  set stroke(stroke: string) {
    this._stroke = stroke;
  }

  abstract transform(start: Point2D, end: Point2D): void;
  abstract moveTo(point: Point2D): this;
  abstract move(point: Point2D): this;
}
