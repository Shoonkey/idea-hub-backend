import { Injectable } from '@nestjs/common';
import { UserSettingsDto } from '../../infrastructure/http/dtos/user/user-settings.dto';
import { UserListItemDto } from '../../infrastructure/http/dtos/user/user-list-item.dto';
import { IUserService } from '../interfaces/user.service.interface';
import { IUserRepository } from '../../domain/repositories/user.repository.interface';
import { UserDto } from '../../infrastructure/http/dtos/user/user.dto';

@Injectable()
export class UserService implements IUserService {
  constructor(private readonly _userRepository: IUserRepository) {}
  async getUsers(usernameLike?: string) {
    const data = await this._userRepository.findAll({}, { usernameLike });
    const userListDto: UserListItemDto[] = data.map((user) => ({
      id: user.id,
    }));

    return userListDto;
  }

  getUserById(idOrNickname: string): Promise<UserDto> {
    throw new Error('Method not implemented.');
  }
  getSettings(): Promise<UserSettingsDto> {
    throw new Error('Method not implemented.');
  }
  updateSettings(settingsDto: UserSettingsDto): Promise<void> {
    throw new Error('Method not implemented.');
  }
  deleteUser(userId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  toggleSupportForIdea(ideaId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
