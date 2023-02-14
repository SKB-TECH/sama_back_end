import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RdvService } from './rdv.service';
import { RdvDto } from './DTO/RdvDto';
import { RdvEntity } from './entities/rdv.entity';
import { ModifRdv } from './DTO/modifRdv';
import { SendMail } from "./DTO/SendMail";

@Controller('rdv')
export class RdvController {
  constructor(private rdvService: RdvService) {}

  @Post('nouveau/:email')
  async nouveau(
    @Body() rdv: RdvDto,
    @Param('med') med:string
  ): Promise<RdvEntity> {
    return await this.rdvService.nouveauRdv(rdv,med);
  }
  @Get('oneRdv/:id')
  async getOneDon(@Param('id') id: string): Promise<RdvEntity[]> {
    return await this.rdvService.getOneDon(id);
  }
  @Get('/all')
  async getAllDon(): Promise<RdvEntity[]> {
    return await this.rdvService.getAll();
  }
  //deletePartielle
  @Delete('deleteOne/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.rdvService.deleteOne(id);
  }
  //deleteDefinitive
  @Delete('deletePartielle/:id')
  async deleteDefinitive(@Param('id') id: string) {
    return await this.rdvService.deletePartielle(id);
  }
  //restore
  @Get('restore/:id')
  async restore(@Param('id') id: string) {
    return await this.rdvService.restore(id);
  }
  // modificatiion
  @Patch('update/:id')
  async updateCv(
    @Body() modifier: ModifRdv,
    @Param('id') id: string,
  ): Promise<RdvEntity> {
    return await this.rdvService.modificationRdv(id, modifier);
  }
}
