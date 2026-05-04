import { Injectable } from '@nestjs/common';
import { LoginInfoDto } from './dtos/login-info.dto';
import { SignupInfoDto } from './dtos/signup-info.dto';
import { IAuthService } from './auth.service.interface';

@Injectable()
export class AuthService implements IAuthService {
  getNewToken(payload: string) {}

  login(loginInfo: LoginInfoDto) {}

  signup(signupInfo: SignupInfoDto) {}
}
