import Car from "./Car";

class ElectricCar extends Car {
  _batteryCapacity: number;
  constructor(name: string, color: string[], batteryCapacity: number) {
    super(name, color);
    this._batteryCapacity = batteryCapacity;
  }
  static isCar(objectToCheck: any): boolean {
    return objectToCheck instanceof ElectricCar;
  }
}

export default ElectricCar;
