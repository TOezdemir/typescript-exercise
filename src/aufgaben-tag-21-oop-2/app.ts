import Person from "./classes/Person";
import { Gender } from "./classes/Person";
import Animal from "./classes/Animal";
import IceCreamFlavor from "./classes/IceCreamFlavor";

console.log("Tag 21: Aufgaben OOP 2");
console.log("\n");

const GuyBoy = new Person("Guy Boy", new Date(), Gender.Male);
console.log(GuyBoy);

const DogDog = new Animal("Dog", 5, "Milka Cow Colors");
console.log(DogDog);
DogDog.age = 100;
DogDog.species = "Cow";
DogDog.color = "White";
console.log(DogDog);

console.log("Aufgabe mit Eis");
console.log("\n");

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

schoko_eis.getTotalPrice(3);
console.log(schoko_eis.getLengthOfDescription());
schoko_eis.printInfo();
