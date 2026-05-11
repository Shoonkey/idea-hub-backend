import { FilterByOptions } from '../../infrastructure/http/dtos/filter-by-options.dto';
import { SortByOptions } from '../../infrastructure/http/dtos/sort-by-options.dto';

export abstract class IBaseRepository<T> {
  abstract create(data: any): Promise<T>;
  abstract findAll(
    sortBy: SortByOptions,
    filterBy: FilterByOptions,
  ): Promise<T[]>;
  abstract findById(id: string): Promise<T | null>;
  abstract updateById(id: string, data: any): Promise<void>;
  abstract deleteById(id: string): Promise<void>;
}
