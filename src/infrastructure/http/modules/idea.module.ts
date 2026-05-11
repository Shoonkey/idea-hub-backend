import { Module } from '@nestjs/common';
import { IdeaService } from '../../../application/use-cases/idea.service';
import { IdeaController } from '../controllers/idea.controller';
import { IIdeaService } from '../../../application/interfaces/idea.service.interface';

@Module({
  providers: [
    {
      provide: IIdeaService,
      useClass: IdeaService,
    },
  ],
  controllers: [IdeaController],
})
export class IdeaModule {}
