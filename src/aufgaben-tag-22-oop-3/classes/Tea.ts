import Beverage from "./Beverage";

export enum TeaFlavour {
  Green = "Green",
  Black = "Black",
  Chai = "Chai",
  Peppermint = "Peppermint",
}

class Tea extends Beverage {
  _flavour: TeaFlavour;

  constructor(name: string, price: number, flavour: TeaFlavour) {
    super(name, price);
    this._flavour = flavour;
  }
}

export default Tea;
