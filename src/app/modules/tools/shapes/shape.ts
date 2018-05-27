import { Point2D } from '@tools/shapes/point2d';
import { PolylineShape } from '@tools/shapes';

export interface Shape {
  readonly type: string;
  stroke: string;
  fill: string;
  strokeWidth: number;
  points?: Point2D[];
  toString(): string;
  is(type: string): boolean;
}
