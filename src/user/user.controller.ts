import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDto } from './DTO/UserDto';
import { UserEntity } from './entities/user.entity';
import { ModifUser } from './DTO/ModifUser';
import { UserService } from './user.service';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('nouveau/')
  async nouveau(@Body() user: UserDto): Promise<Partial<UserEntity>> {
    return await this.userService.nouveauRdv(user);
  }
  @Get('oneUser/:id')
  async getOneDon(@Param('id') id: string): Promise<UserEntity[]> {
    return await this.userService.getOneDon(id);
  }
  @Get('/all')
  async getAllDon(): Promise<UserEntity[]> {
    return await this.userService.getAll();
  }
  //deletePartielle
  @Delete('deleteOne/:id')
  async deleteOne(@Param('id') id: string) {
    return await this.userService.deleteOne(id);
  }
  //deleteDefinitive
  @Delete('bloquer/:id')
  async deleteDefinitive(@Param('id') id: string) {
    return await this.userService.bloquer(id);
  }
  //restore
  @Get('debloquer/:id')
  async restore(@Param('id') id: string) {
    return await this.userService.restore(id);
  }
  // modificatiion
  @Patch('update/:id')
  async updateCv(
    @Body() modifier: ModifUser,
    @Param('id') id: string,
  ): Promise<UserEntity> {
    return await this.userService.modificationRdv(id, modifier);
  }
}
