import { UserListItemDto } from '../../infrastructure/http/dtos/user/user-list-item.dto';
import { UserSettingsDto } from '../../infrastructure/http/dtos/user/user-settings.dto';
import { UserDto } from '../../infrastructure/http/dtos/user/user.dto';

export abstract class IUserService {
  abstract getUsers(usernameLike: string): Promise<UserListItemDto[]>;
  abstract getUserById(idOrNickname: string): Promise<UserDto>;
  abstract getSettings(): Promise<UserSettingsDto>;
  abstract updateSettings(settingsDto: UserSettingsDto): Promise<void>;
  abstract deleteUser(userId: string): Promise<void>;
  abstract toggleSupportForIdea(ideaId: string): Promise<void>;
}
