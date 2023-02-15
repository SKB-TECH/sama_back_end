import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { DonService } from './don.service';
import { donEntity } from './entities/don.entity';
import { NouveauDon } from './DTO/nouveauDon';
import { ModifDon } from "./DTO/modifDon";
import { JwtAuthGuard } from "../user/Guards/jwt-auth.guards";

@Controller('don')
export class DonController {
  constructor(private donService: DonService) {}

  @Post('nouveau')
  async nouveau(@Body() don: NouveauDon): Promise<donEntity> {
    return await this.donService.nouveauDon(don);
  }
  @Get('oneDon/:id')
  @UseGuards(JwtAuthGuard)
  async getOneDon(@Param('id') id: string): Promise<donEntity[]> {
    return await this.donService.getOneDon(id);
  }
  @Get('/all')
  @UseGuards(JwtAuthGuard)
  async getAllDon(): Promise<donEntity[]> {
    return await this.donService.getAll();
  }
  //deletePartielle
  @Delete('deleteOne/:id')
  @UseGuards(JwtAuthGuard)
  async deleteOne(@Param('id') id: string) {
    return await this.donService.deleteOne(id);
  }
  //deleteDefinitive
  @Delete('deletePartielle/:id')
  @UseGuards(JwtAuthGuard)
  async deleteDefinitive(@Param('id') id: string) {
    return await this.donService.deletePartielle(id);
  }
  //restore
  @Get('restore/:id')
  @UseGuards(JwtAuthGuard)
  async restore(@Param('id') id: string) {
    return await this.donService.restore(id);
  }
  // modificatiion
  @Patch('update/:id')
  @UseGuards(JwtAuthGuard)
  async updateCv(
    @Body() modifier: ModifDon,
    @Param('id') id: string,
  ): Promise<donEntity> {
    return await this.donService.modificationDon(id, modifier);
  }
}
