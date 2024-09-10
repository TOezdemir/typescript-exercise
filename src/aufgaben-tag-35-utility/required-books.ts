import { BookDescription } from "./book-description";
import { IBook } from "./interfaces/IBook";

type RequiredBook = Required<IBook>;
const requiredBook: RequiredBook = {
  name: "Jebus, our saviour?",
  shortDescription: "A brief manifest about Jebus...",
  author: "Jeremy Jenkins",
  publishingYear: "2023",
  numberOfPages: 15,
};
