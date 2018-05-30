export abstract class Shape {
  public readonly type: string;
  public stroke = 'black';
  public rendered = false;
  public _complete = false;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  get complete(): boolean {
    return this._complete;
  }

  set complete(state: boolean) {
    this._complete = state;
  }
}
