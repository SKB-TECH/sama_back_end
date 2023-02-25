import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { RaportService } from './raports.service';
import { JwtAuthGuard } from 'src/user/Guards/jwt-auth.guards';
import { NouveauRapport } from './DTO/NouveauRapport';
import { RapportEntity } from './entities/Rapport.entity';
import { ModifRapport } from './DTO/ModifRapport';
import { User } from 'src/decorates/user.decorator';
import { UserEntity } from '../user/entities/user.entity';

@Controller('raports')
export class RaportController {
  constructor(private RapportService: RaportService) {}
  @Post('nouveau')
  @UseGuards(JwtAuthGuard)
  async nouveau(
    @Body() rapport: NouveauRapport,
    @User() user: UserEntity,
  ): Promise<RapportEntity> {
    return await this.RapportService.nouveauRapport(rapport, user);
  }
  @Get('oneRapport/:id')
  @UseGuards(JwtAuthGuard)
  async getOneDon(@Param('id') id: string): Promise<RapportEntity[]> {
    return await this.RapportService.getOneDon(id);
  }
  @Get('all')
  @UseGuards(JwtAuthGuard)
  async getAll(@User() user: UserEntity): Promise<RapportEntity[]> {
    return await this.RapportService.getAll(user);
  }

  //deletePartielle
  @Delete('deleteOne/:id')
  @UseGuards(JwtAuthGuard)
  async deleteOne(@Param('id') id: string) {
    return await this.RapportService.deleteOne(id);
  }

  //deleteDefinitive
  @Delete('deletePartielle/:id')
  @UseGuards(JwtAuthGuard)
  async deleteDefinitive(@Param('id') id: string) {
    return await this.RapportService.deletePartielle(id);
  }
  //restore
  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restore(@Param('id') id: string) {
    return await this.RapportService.restore(id);
  }
  // modificatiion
  @Patch('update/:id')
  @UseGuards(JwtAuthGuard)
  async updateCv(
    @Body() modifier: ModifRapport,
    @Param('id') id: string,
  ): Promise<RapportEntity> {
    return await this.RapportService.modificationRapport(id, modifier);
  }
}
