import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { Author } from './entities/author.entity';

@Injectable()
export class AuthorsService {
  constructor(
    @Inject('AUTHOR_REPOSITORY')
    private authorRepository: Repository<Author>,
  ) {}

  async create(author: Author): Promise<Author> {
    const newAuthor = this.authorRepository.create(author);
    const results = this.authorRepository.save(newAuthor);

    return results;
  }

  async findAll(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async findOne(id: number): Promise<Author> {
    const author = this.authorRepository.findOne(id);

    return author;
  }

  async update(id: number, authorToUpdate: Author): Promise<Author> {
    const author: Author = await this.authorRepository.findOne(id);
    this.authorRepository.merge(author, authorToUpdate);
    const results = await this.authorRepository.save(author);

    return results;
  }

  async remove(id: number): Promise<DeleteResult> {
    const results = await this.authorRepository.delete(id);

    return results;
  }
}
