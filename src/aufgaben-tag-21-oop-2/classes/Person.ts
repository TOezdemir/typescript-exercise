export enum Gender {
  Male = "Male",
  Female = "Female",
  Diverse = "Diverse",
}

class Person {
  private _name: string;
  private _birthdate: Date = new Date();
  private _gender: Gender;

  get birthdate() {
    console.log("Getter for birthdate is called!");
    return this._birthdate;
  }
  get name() {
    console.log("Getter for name is called!");
    return this._name;
  }
  get gender() {
    console.log("Getter for gender is called!");
    return this._gender;
  }

  set name(value: string) {
    this._name = value;
  }
  set gender(value: Gender) {
    this._gender = value;
  }

  constructor(name: string, birthdate: Date, gender: Gender) {
    this._name = name;
    this._birthdate = birthdate;
    this._gender = gender;
  }
}

export default Person;
