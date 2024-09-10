import { IBook } from "./IBook";

interface IBasicBook extends Pick<IBook, "name" | "author" | "numberOfPages"> {
  name: string;
  author: string;
  numberOfPages: number;
}

const basicBook2: IBasicBook = {
  name: "Walter Moers",
  author: "Walter Moers",
  numberOfPages: 117,
};

console.log(basicBook2);
