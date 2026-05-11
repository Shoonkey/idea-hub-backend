import { Injectable } from '@nestjs/common';
import { IdeaFilterByDto } from '../../infrastructure/http/dtos/idea/idea-filter-by.dto';
import { IdeaSortByDto } from '../../infrastructure/http/dtos/idea/idea-sort-by.dto';
import { IIdeaService } from '../interfaces/idea.service.interface';
import { IdeaListItemDto } from '../../infrastructure/http/dtos/idea/idea-list-item.dto';

@Injectable()
export class IdeaService implements IIdeaService {
  getIdeas(
    sortBy: IdeaSortByDto,
    filterBy: IdeaFilterByDto,
  ): Promise<IdeaListItemDto[]> {
    throw new Error('Method not implemented.');
  }
}
