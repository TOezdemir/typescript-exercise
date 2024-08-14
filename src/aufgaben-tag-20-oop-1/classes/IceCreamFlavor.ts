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
}

export default IceCreamFlavor;
