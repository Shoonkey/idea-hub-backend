import { User } from '@/models';
import { FilterByOptions } from '../../../http/dtos/filter-by-options.dto';
import { SortByOptions } from '../../../http/dtos/sort-by-options.dto';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
import { Injectable } from '@nestjs/common';

interface UserFilterByOptions extends FilterByOptions {
  usernameLike: string;
}

interface UserSortByOptions extends SortByOptions {}

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly _prismaService: PrismaService) {
    super(_prismaService.user);
  }

  async findAll(sortBy: UserSortByOptions, filterBy: UserFilterByOptions) {
    return await this._prismaService.user.findMany({
      where: {
        username: filterBy.usernameLike ?? {
          contains: filterBy.usernameLike,
        },
      },
    });
  }
}
