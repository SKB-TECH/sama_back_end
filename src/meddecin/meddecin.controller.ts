import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { MeddecinService } from './meddecin.service';
import { NouveauMeddecin } from './DTO/nouveauMeddecin';
import { MeddecinEntity } from './entities/meddecin.entity';
import { MeddecinModif } from './DTO/meddecinModif';
@Controller('meddecin')
export class MeddecinController {
  constructor(private meddecinService: MeddecinService) {}

  @Post('nouveau')
  async nouveau(@Body() med: NouveauMeddecin): Promise<MeddecinEntity> {
    return await this.meddecinService.nouveauDon(med);
  }
  @Get('oneMed/:id')
  async getOneDon(@Param('id') id: string): Promise<MeddecinEntity[]> {
    return await this.meddecinService.getOneMed(id);
  }
  @Get('/all')
  async getAllDon(): Promise<MeddecinEntity[]> {
    return await this.meddecinService.getAll();
  }
  //deletePartielle
  @Delete('deleteOne/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.meddecinService.deleteOne(id);
  }
  //deleteDefinitive
  @Delete('deletePartielle/:id')
  async deleteDefinitive(@Param('id') id: string) {
    return await this.meddecinService.deletePartielle(id);
  }
  //restore
  @Get('restore/:id')
  async restore(@Param('id') id: string) {
    return await this.meddecinService.restore(id);
  }
  // modificatiion
  @Patch('update/:id')
  async updateCv(
    @Body() modifier: MeddecinModif,
    @Param('id') id: string,
  ): Promise<MeddecinEntity> {
    return await this.meddecinService.modificationMed(id, modifier);
  }
}
