import { Test, TestingModule } from '@nestjs/testing';
import { MeddecinController } from './meddecin.controller';

describe('MeddecinController', () => {
  let controller: MeddecinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeddecinController],
    }).compile();

    controller = module.get<MeddecinController>(MeddecinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
