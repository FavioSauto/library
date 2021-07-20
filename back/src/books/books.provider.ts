import { Connection, Repository } from 'typeorm';
import { Book } from './entities/book.entity';

export const bookProviders = [
  {
    provide: 'BOOK_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Book),
    inject: ['DATABASE_CONNECTION'],
  },
];
