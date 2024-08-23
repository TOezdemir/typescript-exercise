class Car {
  _name: string;
  _color: string[];
  constructor(name: string, color: string[]) {
    this._name = name;
    this._color = color;
  }
  static isCar(objectToCheck: any): boolean {
    return objectToCheck instanceof Car;
  }
}

export default Car;
