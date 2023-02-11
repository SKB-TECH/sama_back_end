import { Controller, Delete, Get, Param } from '@nestjs/common';
import { DonService } from './don.service';
import { donEntity } from './entities/don.entity';

@Controller('don')
export class DonController {
  constructor(private donService: DonService) {}
  @Get('oneDon/:id')
  async getOneDon(@Param('id') id: string): Promise<donEntity[]> {
    return await this.donService.getOneDon(id);
  }
  @Get('/all')
  async getAllDon(): Promise<donEntity[]> {
    return await this.donService.getAll();
  }
  //deletePartielle
  @Delete('deleteOne/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.donService.deleteOne(id);
  }
  //deleteDefinitive
  @Delete('deletePartielle/:id')
  async deleteDefinitive(@Param('id') id: string) {
    return await this.donService.deletePartielle(id);
  }
  //restore
  @Get('restore/:id')
  async restore(@Param('id') id: string) {
    return await this.donService.restore(id);
  }
}
