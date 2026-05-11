import { Test, TestingModule } from '@nestjs/testing';
import { IdeaController } from '../../../../../src/infrastructure/http/controllers/idea.controller';

describe('IdeaController', () => {
  let controller: IdeaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdeaController],
    }).compile();

    controller = module.get<IdeaController>(IdeaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
