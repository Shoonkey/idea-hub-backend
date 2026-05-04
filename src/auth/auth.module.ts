import { Module } from '@nestjs/common';
import { IAuthService } from './auth.service.interface';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  providers: [
    {
      provide: IAuthService,
      useClass: AuthService,
    },
  ],
  controllers: [AuthController]
})
export class AuthModule {}
