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
  public static factory(shapeType: string): Shape {
    const constr = shapeType;

    return new ShapeFactory[constr]();
  }

  public static polyline(): PolylineShape {
    return new PolylineShape();
  }
}
