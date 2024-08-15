class IceCreamFlavor {
  _name: string;
  _price: number;
  _isPopular: boolean;
  _description?: string;

  constructor() {
    this._name = "";
    this._price = 0;
    this._isPopular = false;
    this._description = undefined;
  }

  getTotalPrice(numberOfScoops: number): number {
    const total = this._price * numberOfScoops;
    console.log(
      `Total price for ${numberOfScoops} scoops of ${
        this._name
      }: ${total.toFixed(2)} Euro! `
    );
    return total;
  }

  printInfo() {
    const popularity = this._isPopular ? "is popular" : "is not popular";
    console.log(
      `Flavour ${this._name} ${popularity} and costs ${this._price} Euro.`
    );
  }

  getLengthOfDescription(): number {
    return this._description ? this._description.length : 0;
  }
}

export default IceCreamFlavor;
