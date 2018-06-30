import { Point2D } from '@math';
import { ShapeStateEnum } from '@tools/enums';

export type DragHandler = (point: Point2D) => void;

export abstract class Shape {
  public readonly id: string;
  public readonly type: string;
  public rendered = false;
  public editing = true;
  public hovered = false;
  public parent: Shape;
  public state = ShapeStateEnum.EDITING;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  constructor() {
    this.id = crypto.getRandomValues(new Uint32Array(2))
      .toString().replace(',', '');
  }

  setState(state: ShapeStateEnum): this {
    this.state = state;

    return this;
  }

  public isStable = (): boolean => this.state === ShapeStateEnum.STABLE;
  public isEditing = (): boolean => this.state === ShapeStateEnum.EDITING;
  public isDragging = (): boolean => this.state === ShapeStateEnum.DRAGGING;

  abstract transform(start: Point2D, end: Point2D): void;
  abstract moveTo(point: Point2D): this;
  abstract createDragHandler(point: Point2D): DragHandler;
  abstract isCorrect(): boolean;
  abstract getStartXY(point: Point2D): Point2D;
  abstract get x(): number;
  abstract get y(): number;
}
