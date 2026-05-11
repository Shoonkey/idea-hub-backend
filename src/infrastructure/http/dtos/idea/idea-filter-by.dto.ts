import { RangeFilter } from '../range-filter.dto';

export interface IdeaFilterByDto {
  authorNickname?: string;
  date?: RangeFilter<Date>;
}
