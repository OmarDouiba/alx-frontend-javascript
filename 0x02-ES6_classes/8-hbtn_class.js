export default class HolbertonClass {
  constructor(size, name) {
    this._size = size;
    this._name = name;
  }

  get size() {
    return this._size;
  }

  get name() {
    return this._name;
  }

  set size(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Size must be a number');
    }
    this._size = value;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  [Symbol.toPrimitive](value) {
    if (value === 'string') {
      return this._name;
    }
    if (value === 'number') {
      return this._size;
    }
    return this;
  }
}
