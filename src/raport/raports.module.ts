import { Module } from '@nestjs/common';
import { RaportController } from './raports.controller';
import { RaportService } from './raports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RapportEntity } from './entities/Rapport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RapportEntity])],
  controllers: [RaportController],
  providers: [RaportService],
})
export class RaportModule {}
