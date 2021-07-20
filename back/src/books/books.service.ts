import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Book } from './entities/book.entity';

// Author
import { Author } from '../authors/entities/author.entity';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_REPOSITORY')
    private bookRepository: Repository<Book>,
    @Inject('AUTHOR_REPOSITORY')
    private authorRepository: Repository<Author>,
  ) {}

  async create(book: Book): Promise<Book> {
    const newBook = this.bookRepository.create(book);

    let authors = [];
    if (newBook.authors) {
      for (let i = 0; i < newBook.authors.length; i++) {
        const author = this.authorRepository.findOne(newBook.authors[i]);

        authors = [...authors, author];
      }

      newBook.authors = authors;
    }

    const results = this.bookRepository.save(newBook);

    return results;
  }

  async findAll(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    const book = this.bookRepository.findOne(id);

    return book;
  }

  async update(id: number, bookToUpdate: Book): Promise<Book> {
    const book: Book = await this.bookRepository.findOne(id);

    let authors = [];
    for (let i = 0; i < bookToUpdate.authors.length; i++) {
      const author = await this.authorRepository.findOne(
        bookToUpdate.authors[i],
      );

      authors = [...authors, author];
    }

    bookToUpdate.authors = authors;
    this.bookRepository.merge(book, bookToUpdate);
    const results = await this.bookRepository.save(book);

    return results;
  }

  async remove(id: number): Promise<DeleteResult> {
    const results = await this.bookRepository.delete(id);

    return results;
  }
}
