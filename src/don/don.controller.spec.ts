import { Test, TestingModule } from '@nestjs/testing';
import { DonController } from './don.controller';

describe('DonController', () => {
  let controller: DonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonController],
    }).compile();

    controller = module.get<DonController>(DonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
