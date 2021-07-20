import type { IAuthor } from './authors';

export interface IBook {
  id: number;
  title: string;
  description: string;
  edition: string;
  publishedDate: Date;
  publishedCountry: string;
  authors: IAuthor[];
}
