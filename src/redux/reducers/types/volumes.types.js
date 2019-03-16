import type { BookType } from '../../../api/types/book.type';

export type VolumeType = {
  data: Array<BookType>,
  isFetching: boolean,
  error: string,
};
