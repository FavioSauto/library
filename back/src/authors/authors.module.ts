import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthorsService } from './authors.service';
import { authorProviders } from './authors.provider';
import { AuthorsController } from './authors.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [...authorProviders, AuthorsService],
})
export class AuthorsModule {}
