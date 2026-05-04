import { AuthTokenDto } from "./dtos/auth-token.dto";
import { LoginInfoDto } from "./dtos/login-info.dto";
import { SignupInfoDto } from "./dtos/signup-info.dto";

export abstract class IAuthService {
  abstract getNewToken(payload: string): AuthTokenDto;
  abstract login(loginInfo: LoginInfoDto): AuthTokenDto;
  abstract signup(signupInfo: SignupInfoDto): AuthTokenDto;
}