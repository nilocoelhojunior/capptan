// @flow
import type { BookType } from './book.type';

export type VolumesType = {
  kind: string,
  items: Array<BookType>,
  totalItems: number,
};
