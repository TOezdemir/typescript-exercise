import { IBook } from "./IBook";

export interface IReadOnlyBook extends Readonly<IBook> {
  name: string;
  author: string;
  shortDescription: string;
  numberOfPages: number;
  publishingYear: string;
}
