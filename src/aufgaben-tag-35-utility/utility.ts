import { IBookDescription } from "./interfaces/IBookDescription";
import { IReadOnlyBook } from "./interfaces/IReadOnlyBook";
import { IRequiredBook } from "./interfaces/IRequiredBooks";

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
