import { Inject } from '@nestjs/common';
import { Idea } from '@/models';
import { BaseRepository } from '../shared/base-repository/base.repository';
import { PrismaService } from '../prisma/prisma.service';

export class IdeaRepository extends BaseRepository<Idea> {
  constructor(@Inject() prismaService: PrismaService) {
    super(prismaService.idea);
  }
}
