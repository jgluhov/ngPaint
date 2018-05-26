export interface Shape {
  readonly type: string;
  stroke: string;
  fill: string;
  toString(): string;
}
