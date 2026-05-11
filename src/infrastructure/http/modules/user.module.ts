import { Module } from '@nestjs/common';
import { UserService } from '../../../application/use-cases/user.service';
import { UserController } from '../controllers/user.controller';
import { IUserService } from '../../../application/interfaces/user.service.interface';
import { IUserRepository } from '../../../domain/repositories/user.repository.interface';
import { UserRepository } from '../../database/prisma/repositories/user.repository';

@Module({
  providers: [
    {
      provide: IUserService,
      useClass: UserService,
    },
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
