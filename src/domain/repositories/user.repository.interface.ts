import { User } from '@/models';
import { IBaseRepository } from './base-repository.interface';

export abstract class IUserRepository extends IBaseRepository<User> {}
