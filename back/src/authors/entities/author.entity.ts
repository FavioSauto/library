import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

// Types
// Enums
import { CountryLong } from 'src/utils/Enums/countries';

@Entity({ name: 'authors' })
export class Author {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 70 })
  firstName: string;

  @Column({ type: 'varchar', length: 70 })
  lastName: string;

  @Column({
    type: 'enum',
    enum: CountryLong,
  })
  nationality: CountryLong;

  @Column({ type: 'date', nullable: true })
  birthDate: Date;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp with time zone' })
  deletedAt: Date;
}
