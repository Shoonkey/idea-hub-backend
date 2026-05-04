import { Injectable } from '@nestjs/common';
import { IdeaFilterByDto } from './dtos/idea-filter-by.dto';
import { IdeaSortByDto } from './dtos/idea-sort-by.dto';
import { IIdeaService } from './idea.service.interface';

@Injectable()
export class IdeaService implements IIdeaService {
  getIdeas(sortBy: IdeaSortByDto, filterBy: IdeaFilterByDto) {}
}
