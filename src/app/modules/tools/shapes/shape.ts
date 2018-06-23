import { Point2D } from '@math';
import { ShapeStateEnum } from '@tools/enums';

export abstract class Shape {
  public readonly id: string;
  public readonly type: string;
  public _stroke = 'black';
  public rendered = false;
  public editing = true;
  public hovered = false;
  public parent: Shape;
  public state = ShapeStateEnum.EDITING;
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

  private addChild = (shape: Shape): void => {
    this.children.push(shape);
  }

  private setParent = (shape: Shape): void => {
    this.parent = shape;
  }

  get stroke(): string {
    return this.isHovered() ? 'red' : this._stroke;
  }

  set stroke(stroke: string) {
    this._stroke = stroke;
  }

  public isStable = (): boolean => this.state === ShapeStateEnum.STABLE;
  public isEditing = (): boolean => this.state === ShapeStateEnum.EDITING;
  public isHovered = (): boolean => this.state === ShapeStateEnum.HOVERED;

  abstract transform(start: Point2D, end: Point2D): void;
  abstract moveTo(point: Point2D): this;
  abstract move(point: Point2D): this;
}
