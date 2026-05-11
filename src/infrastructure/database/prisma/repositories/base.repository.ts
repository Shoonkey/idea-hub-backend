import { PrismaDelegate } from '../dtos/prisma-delegate.dto';
import { FilterByOptions } from '../../../http/dtos/filter-by-options.dto';
import { SortByOptions } from '../../../http/dtos/sort-by-options.dto';
import { IBaseRepository } from '../../../../domain/repositories/base-repository.interface';

export abstract class BaseRepository<T> implements IBaseRepository<T> {
  constructor(protected model: PrismaDelegate<T>) {}

  abstract findAll(sortBy: SortByOptions, filterBy: FilterByOptions);

  async create(data: any): Promise<T> {
    return this.model.create({ data });
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
