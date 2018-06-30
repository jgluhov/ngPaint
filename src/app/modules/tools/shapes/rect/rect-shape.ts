import { Point2D } from '@math/point2d';
import { Shape, DragHandler } from '@shapes/shape';
import { SHAPE_DEFAULT_COLOR, SHAPE_HOVER_COLOR } from '@tools/tool-options';

export interface BoundingRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class RectShape extends Shape {
  public readonly type = 'rect';
  x = 0;
  y = 0;
  fill = 'none';
  strokeWidth;
  width = 0;
  height = 0;
  rx = 2;
  ry = 2;
  _stroke;

  constructor(
    start: Point2D,
    thickness: number = 2,
    color: string = SHAPE_DEFAULT_COLOR
  ) {
    super();

    this.x = start.x;
    this.y = start.y;
    this.strokeWidth = thickness;
    this.stroke = color;
  }

  getBoundingRect(start: Point2D, end: Point2D): BoundingRect {
    if (start.x <= end.x && start.y <= end.y) {
      return {
        x: start.x,
        y: start.y,
        width: end.x - start.x,
        height: end.y - start.y
      };
    }

    if (start.x <= end.x && start.y > end.y) {
      return {
        x: start.x,
        y: end.y,
        width: end.x - start.x,
        height: start.y - end.y
      };
    }

    if (start.x >= end.x && start.y > end.y) {
      return {
        x: end.x,
        y: end.y,
        width: start.x - end.x,
        height: start.y - end.y
      };
    }

    if (start.x >= end.x && start.y <= end.y) {
      return {
        x: end.x,
        y: start.y,
        width: start.x - end.x,
        height: end.y - start.y
      };
    }
  }

  transform(start: Point2D, end: Point2D): void {

    const { x, y, width, height }: BoundingRect = this.getBoundingRect(start, end);
    const p = new Point2D(x, y);

    this.moveTo(p);
    this.setSize(width, height);
  }

  get stroke(): string {
    return this.isDragging() ?
      SHAPE_HOVER_COLOR : SHAPE_DEFAULT_COLOR;
  }

  set stroke(color: string) {
    this._stroke = color;
  }

  public moveTo(to: Point2D): this {
    this.x = to.x;
    this.y = to.y;

    return this;
  }

  public createDragHandler(start: Point2D): DragHandler {
    const xStartX = start.x - this.x;
    const xStartY = start.y - this.y;

    return (end: Point2D): void => {
      this.x = end.x - xStartX;
      this.y = end.y - xStartY;
    };
  }

  public getStartXY(start: Point2D): Point2D {
    return new Point2D(start.x - this.x, start.y - this.y);
  }

  private setSize(width: number, height: number): this {
    this.width = width;
    this.height = height;

    return this;
  }

  public isCorrect(): boolean {
    return true;
  }
}
