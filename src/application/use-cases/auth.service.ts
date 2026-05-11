import { Injectable } from '@nestjs/common';
import { LoginInfoDto } from '../../infrastructure/http/dtos/auth/login-info.dto';
import { SignupInfoDto } from '../../infrastructure/http/dtos/auth/signup-info.dto';
import { IAuthService } from '../interfaces/auth.service.interface';
import { AuthTokenDto } from '../../infrastructure/http/dtos/auth/auth-token.dto';

@Injectable()
export class AuthService implements IAuthService {
  getNewToken(payload: string): Promise<AuthTokenDto> {
    throw new Error('Method not implemented.');
  }
  login(loginInfo: LoginInfoDto): Promise<AuthTokenDto> {
    throw new Error('Method not implemented.');
  }
  signup(signupInfo: SignupInfoDto): Promise<AuthTokenDto> {
    throw new Error('Method not implemented.');
  }
}
