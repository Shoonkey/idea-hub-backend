import { IdeaFilterByDto } from './dtos/idea-filter-by.dto';
import { IdeaListDto } from './dtos/idea-list.dto';
import { IdeaSortByDto } from './dtos/idea-sort-by.dto';

export abstract class IIdeaService {
  abstract getIdeas(
    sortBy: IdeaSortByDto,
    filterBy: IdeaFilterByDto,
  ): IdeaListDto[];
}
