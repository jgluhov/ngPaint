import { Point2D } from '@math';
import { ShapeStateEnum } from '@tools/enums';
import { SHAPE_HOVER_STROKE } from '../tool-options';

export type DragHandler = (point: Point2D) => void;

export abstract class Shape {
  public id: string;
  public readonly type: string;
  protected stroke;
  protected strokeWidth;
  protected _stroke;
  protected _strokeWidth;
  public state = ShapeStateEnum.EDITING;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  setState(state: ShapeStateEnum): this {
    this.state = state;

    if (state === ShapeStateEnum.DRAGGING) {
      this.stroke = SHAPE_HOVER_STROKE;
      this.strokeWidth = this._strokeWidth * 1.5;
    } else {
      this.stroke = this._stroke;
      this.strokeWidth = this._strokeWidth;
    }

    return this;
  }

  public isCorrect(): boolean {
    return true;
  }

  public transform(start: Point2D, end: Point2D): this {
    return this;
  }

  public done(): void {
    this.id = crypto.getRandomValues(new Uint32Array(2))
    .toString().replace(',', '');
    this.state = ShapeStateEnum.STABLE;
  }

  public isStable(): boolean {
    return this.state === ShapeStateEnum.STABLE;
  }

  public isDragging(): boolean {
    return this.state === ShapeStateEnum.DRAGGING;
  }

  abstract getDragHandler(point: Point2D): DragHandler;
}
