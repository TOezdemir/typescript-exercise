import { IBook } from "./IBook";

interface IPartialBook extends Partial<IBook> {}

const partialBook2: IPartialBook = {
  // author: "Marc-Uwe Kling",
  name: "Quality Land 2.0",
  // publishingYear: "2020",
  // numberOfPages: 225
};

console.log(partialBook2);
