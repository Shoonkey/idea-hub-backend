import {
  Controller,
  Get,
  NotImplementedException,
  Query,
} from '@nestjs/common';

@Controller('idea')
export class IdeaController {
  @Get('all')
  getIdeas(@Query('sortBy') sortByDto, @Query('filterBy') filterByDto) {
    throw new NotImplementedException();
  }
}
