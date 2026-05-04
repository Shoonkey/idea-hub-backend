import { RangeFilter } from '../../shared/range-filter/range-filter.type';

export interface IdeaFilterByDto {
  authorNickname?: string;
  date?: RangeFilter<Date>;
}
