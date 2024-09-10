import { IBook } from "./IBook";

export interface IBookDescription
  extends Pick<IBook, "name" | "shortDescription"> {
  name: string;
  shortDescription: string;
}
