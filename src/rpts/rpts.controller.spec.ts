import { Test, TestingModule } from '@nestjs/testing';
import { RptsController } from './rpts.controller';

describe('RptsController', () => {
  let controller: RptsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RptsController],
    }).compile();

    controller = module.get<RptsController>(RptsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
