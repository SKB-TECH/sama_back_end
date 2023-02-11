import { Test, TestingModule } from '@nestjs/testing';
import { MeddecinService } from './meddecin.service';

describe('MeddecinService', () => {
  let service: MeddecinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeddecinService],
    }).compile();

    service = module.get<MeddecinService>(MeddecinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
