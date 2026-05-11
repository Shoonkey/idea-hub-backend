import { AuthTokenDto } from '../../infrastructure/http/dtos/auth/auth-token.dto';
import { LoginInfoDto } from '../../infrastructure/http/dtos/auth/login-info.dto';
import { SignupInfoDto } from '../../infrastructure/http/dtos/auth/signup-info.dto';

export abstract class IAuthService {
  abstract getNewToken(payload: string): Promise<AuthTokenDto>;
  abstract login(loginInfo: LoginInfoDto): Promise<AuthTokenDto>;
  abstract signup(signupInfo: SignupInfoDto): Promise<AuthTokenDto>;
}
