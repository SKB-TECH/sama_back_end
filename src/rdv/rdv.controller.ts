import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post, UseGuards
} from "@nestjs/common";
import { RdvService } from './rdv.service';
import { RdvDto } from './DTO/RdvDto';
import { RdvEntity } from './entities/rdv.entity';
import { ModifRdv } from './DTO/modifRdv';
import { SendMail } from "./DTO/SendMail";
import { JwtAuthGuard } from "../user/Guards/jwt-auth.guards";

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
  @UseGuards(JwtAuthGuard)
  async getOneDon(@Param('id') id: string): Promise<RdvEntity[]> {
    return await this.rdvService.getOneDon(id);
  }
  @Get('/all')
  @UseGuards(JwtAuthGuard)
  async getAllDon(): Promise<RdvEntity[]> {
    return await this.rdvService.getAll();
  }
  //deletePartielle
  @Delete('deleteOne/:id')
  @UseGuards(JwtAuthGuard)
  async deleteOne(@Param('id') id: string) {
    return await this.rdvService.deleteOne(id);
  }
  //deleteDefinitive
  @Delete('deletePartielle/:id')
  @UseGuards(JwtAuthGuard)
  async deleteDefinitive(@Param('id') id: string) {
    return await this.rdvService.deletePartielle(id);
  }
  //restore
  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restore(@Param('id') id: string) {
    return await this.rdvService.restore(id);
  }
  // modificatiion
  @Patch('update/:id')
  @UseGuards(JwtAuthGuard)
  async updateCv(
    @Body() modifier: ModifRdv,
    @Param('id') id: string,
  ): Promise<RdvEntity> {
    return await this.rdvService.modificationRdv(id, modifier);
  }
}
