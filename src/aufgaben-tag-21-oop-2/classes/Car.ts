class Car {
  _brand: string;
  _constructionYear: string;
  _currentSpeed: number = 0;

  constructor(brand: string, constructionYear: string, currentSpeed: number) {
    this._brand = brand;
    this._constructionYear = constructionYear;
    this._currentSpeed = currentSpeed;
  }
}
