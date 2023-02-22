import { Module } from '@nestjs/common';
import { RaportsController } from './raports.controller';
import { RaportsService } from './raports.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RapportEntity } from './entities/Rapport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RapportEntity])],
  controllers: [RaportsController],
  providers: [RaportsService],
})
export class RaportsModule {}
