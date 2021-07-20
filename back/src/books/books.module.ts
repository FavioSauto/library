import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { BooksService } from './books.service';
import { bookProviders } from './books.provider';
import { BooksController } from './books.controller';
import { authorProviders } from '../authors/authors.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [...bookProviders, ...authorProviders, BooksService],
})
export class BooksModule {}
