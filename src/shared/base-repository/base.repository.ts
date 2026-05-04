import { PrismaDelegate } from './prisma-delegate.interface';
import { FilterByOptions } from './filter-by-options.interface';
import { SortByOptions } from './sort-by-options.interface';

export abstract class BaseRepository<T> {
  constructor(protected model: PrismaDelegate<T>) {}

  getFilterPredicates(filterBy: FilterByOptions) {}
  getSortPredicates(sortBy: SortByOptions) {}

  async create(data: any): Promise<T> {
    return this.model.create({ data });
  }

  async findAll(sortBy: SortByOptions, filterBy: FilterByOptions) {
    return this.model.findMany({
      where: this.getFilterPredicates(filterBy),
      orderBy: this.getSortPredicates(sortBy),
    });
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findUnique({ where: { id } });
  }

  async updateById(id: string, data: any): Promise<void> {
    await this.model.update({
      where: { id },
      data,
    });
  }

  async deleteById(id: string): Promise<void> {
    await this.model.delete({
      where: { id },
    });
  }
}
