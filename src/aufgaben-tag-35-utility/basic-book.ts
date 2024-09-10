import { IBook } from "./interfaces/IBook";

type BasicBook = Pick<IBook, "author" | "name" | "numberOfPages">;

const basicBook: BasicBook = {
  author: "Walter Moers",
  name: "Das Eichhörnchen, das rückwärts leben wollte.",
  numberOfPages: 176,
};
