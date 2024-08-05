import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/createUser.dto';

export interface IUsersService {
  createUser(createUserDto: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  findOneById(id: string): Promise<User | null>;
  findOneByEmail(email: string): Promise<User | null>;
  updateUser(id: string, updateUserDto: Partial<CreateUserDto>): Promise<User>;
  deleteUser(id: string): Promise<void>;
}