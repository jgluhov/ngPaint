export abstract class Shape {
  public readonly type: string;
  public stroke = 'black';
  public rendered = false;
  private _editing = true;

  public ofType(type: string): boolean {
    return this.type === type;
  }

  get editing(): boolean {
    return this._editing;
  }

  set editing(state: boolean) {
    this._editing = state;
  }
}
