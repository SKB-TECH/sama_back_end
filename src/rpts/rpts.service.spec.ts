import { Test, TestingModule } from '@nestjs/testing';
import { RptsService } from './rpts.service';

describe('RptsService', () => {
  let service: RptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RptsService],
    }).compile();

    service = module.get<RptsService>(RptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
