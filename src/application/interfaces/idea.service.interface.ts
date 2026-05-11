import { IdeaFilterByDto } from '../../infrastructure/http/dtos/idea/idea-filter-by.dto';
import { IdeaListItemDto } from '../../infrastructure/http/dtos/idea/idea-list-item.dto';
import { IdeaSortByDto } from '../../infrastructure/http/dtos/idea/idea-sort-by.dto';

export abstract class IIdeaService {
  abstract getIdeas(
    sortBy: IdeaSortByDto,
    filterBy: IdeaFilterByDto,
  ): Promise<IdeaListItemDto[]>;
}
