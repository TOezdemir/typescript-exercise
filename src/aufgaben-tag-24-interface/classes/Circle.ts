import IShape from "../interfaces/IShape";

class Circle implements IShape {
  _name: string;
  _color: string;
  _radius: number;
  _isRound: boolean;

  constructor(name: string, color: string, radius: number, isRound: boolean) {
    this._name = name;
    this._color = color;
    this._radius = radius;
    this._isRound = isRound;
  }

  draw() {
    console.log("Drawing circle...");
  }
}

export default Circle;
