import { Point2D } from '@math/point2d';
import { Shape, DragHandler } from '@shapes/shape';
import { SHAPE_DEFAULT_STROKE, SHAPE_DEFAULT_STROKE_WIDTH } from '@tools/tool-options';

export interface BoundingRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export class RectShape extends Shape {
  public readonly type = 'rect';
  width = 0;
  height = 0;
  x = 0;
  y = 0;
  rx = 2;
  ry = 2;

  constructor(
    start: Point2D,
    stroke: string = SHAPE_DEFAULT_STROKE,
    strokeWidth: number = SHAPE_DEFAULT_STROKE_WIDTH,
    public fill: string = 'none'
  ) {
    super();

    this.x = start.x;
    this.y = start.y;
    this.stroke = stroke;
    this.strokeWidth = strokeWidth;
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
