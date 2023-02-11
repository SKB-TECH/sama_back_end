import { Module } from '@nestjs/common';
import { MeddecinController } from './meddecin.controller';
import { MeddecinService } from './meddecin.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MeddecinEntity } from './entities/meddecin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MeddecinEntity])],
  controllers: [MeddecinController],
  providers: [MeddecinService],
})
export class MeddecinModule {}
