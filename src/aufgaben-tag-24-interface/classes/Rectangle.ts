import IShape from "../interfaces/IShape";

class Rectangle implements IShape {
  _width: number;
  _height: number;
  _name: string;
  _color: string;
  _isRound: boolean;

  constructor(
    width: number,
    height: number,
    name: string,
    color: string,
    isRound: boolean
  ) {
    this._width = width;
    this._height = height;
    this._name = name;
    this._color = color;
    this._isRound = isRound;
  }

  draw() {
    console.log("Drawing rectangle...");
  }
}

export default Rectangle;
