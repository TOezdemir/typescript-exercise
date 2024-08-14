import Person from "./Person";

class SchoolClass {
  _id: number;
  _name: string;
  _endDate?: Date;
  _person: Person[];

  constructor(id: number, name: string, person: Person[]) {
    this._id = id;
    this._name = name;
    this._person = person;
    console.log("School class creation successfull!");
  }
}

export default SchoolClass;
