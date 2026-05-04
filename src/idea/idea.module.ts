import { Module } from '@nestjs/common';
import { IIdeaService } from './idea.service.interface';
import { IdeaService } from './idea.service';
import { IdeaController } from './idea.controller';

@Module({
  providers: [
    {
      provide: IIdeaService,
      useClass: IdeaService,
    },
  ],
  controllers: [IdeaController]
})
export class IdeaModule {}
