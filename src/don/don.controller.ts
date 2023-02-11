import { Controller, Get, Param } from '@nestjs/common';
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
}
