import { Point2D } from '@tools/shapes/point2d';
import { PolylineShape } from '@tools/shapes';

export interface Shape {
  readonly type: string;
  stroke: string;
  fill: string;
  points?: Point2D[];
  toString(): string;
  is(type: string): boolean;
}

export class ShapeFactory {
  public static polyline(points: Point2D): PolylineShape {
    return new PolylineShape();
  }

  public createShape(shapeType: string): Shape {
    const constr = shapeType;

    return new ShapeFactory[constr]();
  }
}
