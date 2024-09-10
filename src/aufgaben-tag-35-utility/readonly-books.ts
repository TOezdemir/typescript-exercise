import { IBook } from "./interfaces/IBook";

type ReadOnlyBook = Readonly<IBook>;

const readOnlyBook: ReadOnlyBook = {
  author: "Kent Brokman",
  name: "Live from Spingfield...",
  shortDescription: "Working on Springfield as a ...",
  numberOfPages: 174,
  publishingYear: "2005",
};

readOnlyBook.author = "Jermaine Jones";
