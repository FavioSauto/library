import { Connection, Repository } from 'typeorm';
import { Author } from './entities/author.entity';

export const authorProviders = [
  {
    provide: 'AUTHOR_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Author),
    inject: ['DATABASE_CONNECTION'],
  },
];
