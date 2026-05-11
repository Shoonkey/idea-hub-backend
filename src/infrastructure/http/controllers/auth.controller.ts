import { Body, Controller, Get, NotImplementedException, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Get()
  renewToken() {
    throw new NotImplementedException();
  }

  @Post()
  login(@Body() loginInfoDto) {
    throw new NotImplementedException();
  }

  @Post()
  signup(@Body() signupInfoDto) {
    throw new NotImplementedException();
  }
}
