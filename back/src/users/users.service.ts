import { Injectable, Inject } from '@nestjs/common';
import { DeleteResult, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async create(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    const results = this.userRepository.save(newUser);

    return results;
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = this.userRepository.findOne(id);

    return user;
  }

  async update(id: number, userToUpdate: User): Promise<User> {
    const user: User = await this.userRepository.findOne(id);
    this.userRepository.merge(user, userToUpdate);
    const results = await this.userRepository.save(user);

    return results;
  }

  async remove(id: number): Promise<DeleteResult> {
    const results = await this.userRepository.delete(id);

    return results;
  }
}
