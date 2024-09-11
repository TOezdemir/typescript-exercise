import { IBookDescription } from "./interfaces/IBookDescription";
import { IReadOnlyBook } from "./interfaces/IReadOnlyBook";
import { IRequiredBook } from "./interfaces/IRequiredBooks";
import { BasicColors, RealColors } from "./colors";
import { IDonkey } from "./interfaces/IDonkey";
import { Donkey } from "./enums/donkey";

const bookDescription: IBookDescription = {
  name: "Pongolo Jones",
  shortDescription: "In a world with pet names as actual human names...",
};

console.log(bookDescription);

const requiredBook: IRequiredBook = {
  author: "Jimbo Jones",
  name: "The art of hitting yourself...",
  shortDescription: "A brief introduction into hitting yourself...",
  publishingYear: "1996",
  numberOfPages: 55,
};

console.log(requiredBook);

const readOnlyBook2: IReadOnlyBook = {
  name: "Cal Castus",
  author: "Cal Castus",
  shortDescription: "Who is Cal Castus",
  numberOfPages: 266,
  publishingYear: "2024",
};

// readOnlyBook2.author = "Obi Wan";

console.log(readOnlyBook2);
console.log("test");

function showColors(colors: RealColors): void {
  console.log(colors);
}

showColors("BLACK"); // Yes
// showColors("RED"); // No :(
// showColors("BLUE"); // No :(
// showColors("GREEN"); // No :(

type donkeyRecord = Record<Donkey, IDonkey>;

// const donkey1: donkeyRecord = {
//   age: 10,
//   name: Donkey.Coco,
//   fluffyness: 10,
//   favouriteFood: "corn",
// };

console.clear();

const donkeyNames: donkeyRecord = {};
for (let esel = 0; esel < 5; esel++) {
  if (Donkey[esel]) {
    if (esel === 0) {
      console.log(`${esel}: Daisy`);
    } else if (esel === 1) {
      console.log(`${esel}: Gus`);
    } else if (esel === 2) {
      console.log(`${esel}: Rosie`);
    }
  }
}

const donkeyRecord: Record<Donkey, IDonkey> = {
  [Donkey.Daisy]: {
    name: Donkey.Daisy,
    age: 3,
    fluffyness: 10,
    favouriteFood: "quinoa",
  },
  [Donkey.Coco]: {
    name: Donkey.Coco,
    age: 5,
    fluffyness: 9,
    favouriteFood: "vanilla ice cream",
  },
  [Donkey.Gus]: {
    name: Donkey.Gus,
    age: 6,
    fluffyness: 9,
    favouriteFood: "Kentucky Fried Chicken",
  },
  [Donkey.Jasper]: {
    name: Donkey.Jasper,
    age: 9,
    fluffyness: 3,
    favouriteFood: "Bananas",
  },
  [Donkey.Rosie]: {
    name: Donkey.Rosie,
    age: 2,
    fluffyness: 10,
    favouriteFood: "Milk of 1000 Cows",
  },
};
console.log(donkeyRecord);
console.log(Donkey.Gus);
