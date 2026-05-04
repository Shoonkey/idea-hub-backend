import { Module } from '@nestjs/common';
import { IUserService } from './user.service.interface';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  providers: [
    {
      provide: IUserService,
      useClass: UserService,
    },
  ],
  controllers: [UserController]
})
export class UserModule {}
