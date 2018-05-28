import { Point2D } from '@tools/shapes/point2d';
import { PolylineShape } from '@tools/shapes';

export interface Shape {
  readonly type: string;
  _rendered: boolean;
  stroke: string;
  fill: string;
  strokeWidth: number;
  points?: Point2D[];
  toString(): string;
  ofType(type: string): boolean;
}

export class Shape {
  public ofType(type: string): boolean {
    return this.type === type;
  }
}
