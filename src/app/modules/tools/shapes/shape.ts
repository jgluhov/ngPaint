export interface Shape {
  readonly type: string;
  stroke: string;
  fill: string;
  toString(): string;
  is(type: string): boolean;
}
