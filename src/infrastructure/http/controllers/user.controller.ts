import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  NotImplementedException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { IUserService } from '../../../application/interfaces/user.service.interface';

@Controller('users')
export class UserController {
  constructor(private readonly _userService: IUserService) {}

  @Get()
  async getUsers(@Query('usernameLike') usernameLike: string) {
    return await this._userService.getUsers(usernameLike);
  }

  @Get(':idOrNickname')
  getUserById(@Param('idOrNickname') idOrNickname: string) {
    throw new NotImplementedException();
  }

  @Get('settings')
  getSettings() {
    throw new NotImplementedException();
  }

  @Put('settings')
  @HttpCode(204)
  updateSettings(@Body() settingsDto) {
    throw new NotImplementedException();
  }

  @Delete('delete')
  @HttpCode(204)
  deleteUser() {
    throw new NotImplementedException();
  }

  @Post('toggleSupportForIdea')
  @HttpCode(204)
  toggleSupportForIdea(@Query('ideaId') ideaId) {
    throw new NotImplementedException();
  }
}
