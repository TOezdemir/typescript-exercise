import { IBook } from "./IBook";

export interface IReadOnlyBook extends Readonly<IBook> {}
