import IceCreamFlavor from "./classes/IceCreamFlavor";
import SchoolClass from "./classes/SchoolClass";
import Person from "./classes/Person";

const schoko_eis = new IceCreamFlavor();
schoko_eis._name = "Schokoladeneis";
schoko_eis._price = 1.7;
schoko_eis._isPopular = true;
schoko_eis._description = "SCHOKOLADEEEE!";

console.log(schoko_eis);

const vanille_eis = new IceCreamFlavor();
vanille_eis._name = "Vanilleeis";
vanille_eis._price = 2.0;
vanille_eis._isPopular = true;
vanille_eis._description = "Klassiker!";

console.log(vanille_eis);

const erdbeer_eis = new IceCreamFlavor();
erdbeer_eis._name = "Erdbeereis";
erdbeer_eis._price = 2.0;
erdbeer_eis._isPopular = true;
erdbeer_eis._description = "Mhh... Erdbeeren!";

console.log(erdbeer_eis);

const schlumpf_eis = new IceCreamFlavor();
schlumpf_eis._name = "Schlumpfeis";
schlumpf_eis._price = 1.5;
schlumpf_eis._isPopular = false;
schlumpf_eis._description = "Mit echten Schlümpfen! :-)";

console.log(schlumpf_eis);

const eisSorten: IceCreamFlavor[] = [
  schoko_eis,
  vanille_eis,
  erdbeer_eis,
  schlumpf_eis,
];

console.log(eisSorten);

const popularIceCreams = eisSorten
  .filter((eis) => eis._isPopular)
  .map((eis) => eis._name);

console.log("Die beliebtesten Eissorten: ", popularIceCreams);

const unpopularIceCreams = eisSorten
  .filter((eis) => !eis._isPopular)
  .map((eis) => eis._name);

console.log("Nicht so bliebt: ", unpopularIceCreams, ":-(");

const klasse_1 = new SchoolClass(1, "10b", []);
console.log(klasse_1);
const klasse_2 = new SchoolClass(2, "10a", []);
console.log(klasse_2);
const klasse_3 = new SchoolClass(3, "8b", []);
console.log(klasse_3);

klasse_1._name = "100b";
console.log(klasse_1);

klasse_2._name = "100a";
console.log(klasse_2);

const personDetails: Person[] = [
  new Person(1, "Max", "Eberl", new Date(2010, 5, 2)),
  new Person(2, "Mix", "Ebers", new Date(2009, 6, 20)),
  new Person(3, "Mux", "Ebern", new Date(2011, 11, 15)),
  new Person(4, "Mox", "Oberl", new Date(2010, 3, 5)),
  new Person(5, "Mex", "Iberl", new Date(2010, 7, 25)),
  new Person(6, "Lax", "Uberl", new Date(2010, 7, 5)),
  new Person(7, "Kax", "Eburl", new Date(2010, 8, 18)),
  new Person(8, "Nax", "Ebarl", new Date(2010, 5, 24)),
  new Person(9, "Pax", "Eberk", new Date(2010, 5, 31)),
  new Person(10, "Dax", "Ebert", new Date(2010, 5, 19)),
];

// for (let i: number = 1; i < 11; i++) {
//   const student = new Person(i, `Student ${i}`, `lastname ${i}`, new Date());
//   klasse_1._person?.push(student);
// }

for (const person of personDetails) {
  klasse_1._person.push(person);
}

console.log(klasse_1);
