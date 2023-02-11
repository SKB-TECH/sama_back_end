import { Test, TestingModule } from '@nestjs/testing';
import { DonService } from './don.service';

describe('DonService', () => {
  let service: DonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonService],
    }).compile();

    service = module.get<DonService>(DonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
