import { Injectable } from '@nestjs/common';
import { UserSettingsDto } from './dtos/user-settings.dto';
import { IUserService } from './user.service.interface';

@Injectable()
export class UserService implements IUserService {
  getUsers(nicknameLike?: string) {}

  getUserById(id: string) {}

  getSettings(userId: string) {}

  updateSettings(newSettings: UserSettingsDto, userId: string) {}

  deleteUser(id: string) {}

  toggleSupportForIdea(ideaId: string, userId: string) {}
}
