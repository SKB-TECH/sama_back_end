import { Module } from '@nestjs/common';
import { RptsController } from './rpts.controller';
import { RptsService } from './rpts.service';

@Module({
  controllers: [RptsController],
  providers: [RptsService]
})
export class RptsModule {}
