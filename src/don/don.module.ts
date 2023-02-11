import { Module } from '@nestjs/common';
import { DonController } from './don.controller';
import { DonService } from './don.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { donEntity } from './entities/don.entity';

@Module({
  imports: [TypeOrmModule.forFeature([donEntity])],
  controllers: [DonController],
  providers: [DonService],
})
export class DonModule {}
