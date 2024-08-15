class Animal {
  private _species: string;
  private _age: number;
  private _color: string;

  //* GET:
  get species() {
    console.log("Getter for species is called!");
    return this._species;
  }
  get age() {
    console.log("Getter for age is called!");
    return this._age;
  }
  get color() {
    console.log("Getter for color is called!");
    return this._color;
  }
  //* SET:
  set species(value: string) {
    this._species = value;
  }
  set age(value: number) {
    this._age = value;
  }
  set color(value: string) {
    this._color = value;
  }

  constructor(species: string, age: number, color: string) {
    this._species = species;
    this._age = age;
    this._color = color;
  }
}

export default Animal;
