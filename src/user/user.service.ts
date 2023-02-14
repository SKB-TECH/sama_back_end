import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from './DTO/UserDto';
import { ModifUser } from './DTO/ModifUser';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async find(id: string) {
    const rdv = await this.userRepository.findBy({
      id: id,
    });
    if (!rdv) {
      throw new NotFoundException(
        `Le rdv correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return rdv;
  }

  //findoneDon
  async getOneDon(id: string) {
    return this.find(id);
  }
  async getAll() {
    const user = await this.userRepository.find();
    if (!user) {
      throw new NotFoundException("Vous n'avez aucun user");
    }
    return user;
  }
  //suppression defimitive
  async deleteOne(id: string) {
    return await this.userRepository.delete(id);
  }
  //suppression partielle
  async bloquer(id: string) {
    return await this.userRepository.softDelete(id);
  }
  async restore(id: string) {
    return await this.userRepository.restore(id);
  }
  //nouveau don
  async nouveauRdv(nouveau: UserDto): Promise<UserEntity> {
    const user = await this.userRepository.save(nouveau);
    return user;
  }

  // modification
  async modificationRdv(id: string, userModif: ModifUser): Promise<UserEntity> {
    const user = await this.userRepository.preload({
      id,
      ...userModif,
    });
    if (!user) {
      throw new NotFoundException(
        `Le user correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return await this.userRepository.save(user);
  }
}
