const props = ['foo'] as [string];

export class ExampleClass {
  private _foo = 'test';

  get [props[0]]() {
    return this._foo;
  }

  set [props[0]](value: string) {
    this._foo = value;
  }
}
