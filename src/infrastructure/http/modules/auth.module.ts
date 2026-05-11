import { Module } from '@nestjs/common';
import { IAuthService } from '../../../application/interfaces/auth.service.interface';
import { AuthService } from '../../../application/use-cases/auth.service';
import { AuthController } from '../controllers/auth.controller';

@Module({
  providers: [
    {
      provide: IAuthService,
      useClass: AuthService,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
