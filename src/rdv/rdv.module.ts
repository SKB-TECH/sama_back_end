import { Module } from '@nestjs/common';
import { RdvController } from './rdv.controller';
import { RdvService } from './rdv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RdvEntity } from './entities/rdv.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RdvEntity])],
  controllers: [RdvController],
  providers: [RdvService],
})
export class RdvModule {}
