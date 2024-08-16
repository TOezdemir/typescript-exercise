import Beverage from "./Beverage";

export enum CoffeeType {
  Espresso = "Espresso",
  Latte = "Latte",
  Cappucciono = "Cappuccino",
  Americano = "Americano",
}

class Coffee extends Beverage {
  _type: CoffeeType;

  constructor(name: string, price: number, type: CoffeeType) {
    super(name, price);
    this._type = type;
  }
}
export default Coffee;
