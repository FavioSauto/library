import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import { Book } from '../../books/entities/book.entity';

// Types
// Enums
import { CountryLong } from 'src/utils/Enums/countries';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 70 })
  firstName: string;

  @Column({ type: 'varchar', length: 70 })
  lastName: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: CountryLong,
  })
  nationality: CountryLong;

  @Column({ type: 'date' })
  birthDate: Date;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deletedAt: Date;

  @OneToMany(() => Book, (book) => book.user)
  books: Book[];
}
