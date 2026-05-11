import { Inject } from '@nestjs/common';
import { Idea } from '@/models';
import { PrismaService } from '../prisma.service';
import { BaseRepository } from './base.repository';
import { FilterByOptions } from '../../../http/dtos/filter-by-options.dto';
import { SortByOptions } from '../../../http/dtos/sort-by-options.dto';

export class IdeaRepository extends BaseRepository<Idea> {
  constructor(@Inject() prismaService: PrismaService) {
    super(prismaService.idea);
  }

  findAll(sortBy: SortByOptions, filterBy: FilterByOptions) {
    throw new Error('Method not implemented.');
  }
}
