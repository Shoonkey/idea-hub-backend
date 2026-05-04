import { Inject } from '@nestjs/common';
import { User } from '@/models';
import { PrismaService } from '../prisma/prisma.service';
import { BaseRepository } from '../shared/base-repository/base.repository';

export class UserRepository extends BaseRepository<User> {
  constructor(@Inject() prismaService: PrismaService) {
    super(prismaService.user);
  }
}
