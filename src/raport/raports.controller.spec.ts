import { Test, TestingModule } from '@nestjs/testing';
import { RaportController } from './raports.controller';

describe('RaportsController', () => {
  let controller: RaportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaportController],
    }).compile();

    controller = module.get<RaportController>(RaportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
