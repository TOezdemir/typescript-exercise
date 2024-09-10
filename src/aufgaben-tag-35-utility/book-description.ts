import { IBook } from "./interfaces/IBook";

type BookDescription = Pick<IBook, "name" | "shortDescription">;

const bookDescriptionVar: BookDescription = {
  name: "Phantasmagoria",
  shortDescription: "Gabriel Knight did it again!",
};
