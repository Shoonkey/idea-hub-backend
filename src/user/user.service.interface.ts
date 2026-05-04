import { UserSettingsDto } from './dtos/user-settings.dto';
import { UserListDto } from './dtos/user-list.dto';
import { UserDto } from './dtos/user.dto';

export abstract class IUserService {
  abstract getUsers(nicknameLike: string): UserListDto;
  abstract getUserById(idOrNickname: string): UserDto;
  abstract getSettings(): UserSettingsDto;
  abstract updateSettings(settingsDto: UserSettingsDto): void;
  abstract deleteUser(userId: string): void;
  abstract toggleSupportForIdea(ideaId: string): void;
}
