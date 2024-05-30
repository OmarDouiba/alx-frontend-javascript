export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Color must be string');
    }
    this._color = value;
  }

  set motor(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Motor must be string');
    }
    this._motor = value;
  }

  set brand(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Brand must be string');
    }
    this._brand = value;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const CloneCar = this.constructor[Symbol.species];
    return new CloneCar();
  }
}
