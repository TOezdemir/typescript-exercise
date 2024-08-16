import Alien from "./classes/Alien";

console.log("OOP-Class-TS-Level-1_4");
const alien1 = new Alien("Flombonaut", "green");
alien1._planet = "Komtran";
alien1._galaxy = "Andromeda";
console.log(alien1);

const alien2 = new Alien("Sleembonian", "violet");
alien2._planet = "Sleembon";
alien2._galaxy = "Galaxy 1229-8";
console.log(alien2);

const alien3 = new Alien("Gazorpian", "Yellow and red");
alien3._planet = "Gazorpazorp";
alien3._galaxy = "Tontata";
console.log(alien3);

console.log("\n");
console.log("OOP-Class-TS-Level-1_5");
import Song from "./classes/Song";
import SongWithUnknownArtist from "./classes/SongWithUnknownArtist";

const song1 = new Song("Hate to Say I told you so", "The Hives");
song1._durationInSeconds = 201;
console.log(song1);

const song2 = new Song("Bohemian Rhapsody", "Queen");
song2._durationInSeconds = 359;
console.log(song2);

const unknownArtist1 = new SongWithUnknownArtist("Stairways to Heaven");
unknownArtist1.artist = "Led Zepplin";
console.log(unknownArtist1);

console.log("\n");
console.log("OOP-Class-TS-Level-1_10");
import Beverage from "./classes/Beverage";
import Tea from "./classes/Tea";
import Coffee from "./classes/Coffe";
import { TeaFlavour } from "./classes/Tea";
import { CoffeeType } from "./classes/Coffe";
const bev1 = new Beverage("Basic Water, basically Us", 1.15);
const bev2 = new Tea("Hardcore Wake Up Call", 1.2, TeaFlavour.Black);
const bev3 = new Coffee(
  "Reduced to the max, the Classic",
  1.0,
  CoffeeType.Americano
);
console.log(bev1);
console.log(bev2);
console.log(bev3);
