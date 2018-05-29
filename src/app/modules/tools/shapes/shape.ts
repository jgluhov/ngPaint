export class Shape {
  public readonly type: string;
  public stroke = 'black';
  public rendered = false;
  public ofType(type: string): boolean {
    return this.type === type;
  }
}
