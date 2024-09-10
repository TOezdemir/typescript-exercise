import { IBook } from "./interfaces/IBook";

type PartialBook = Partial<IBook>;

const partialBook: PartialBook = {
  author: "Walter Moers",
  name: "Das Eichhörnchen, das rückwärts leben wollte",
};

console.log(partialBook);
