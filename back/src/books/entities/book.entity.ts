import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';
import { Author } from '../../authors/entities/author.entity';

// Types
// Enums
import { CountryLong } from 'src/utils/Enums/countries';

@Entity({ name: 'books' })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 70 })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: CountryLong,
  })
  publishedCountry: CountryLong;

  @Column({ type: 'date' })
  publishedDate: Date;

  @Column({ type: 'int', nullable: true })
  edition: number;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.books)
  user: User;

  @ManyToMany(() => Author, { cascade: true })
  @JoinTable()
  authors: Author[];
}
