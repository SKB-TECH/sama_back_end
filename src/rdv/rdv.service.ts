import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RdvEntity } from './entities/rdv.entity';
import { RdvDto } from './DTO/RdvDto';
import { ModifRdv } from './DTO/modifRdv';

@Injectable()
export class RdvService {
  constructor(
    @InjectRepository(RdvEntity)
    private rdvRepository: Repository<RdvEntity>,
  ) {}
  //find
  async find(id: string) {
    const rdv = await this.rdvRepository.findBy({
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
    const rdv = await this.rdvRepository.find();
    if (!rdv) {
      throw new NotFoundException("Vous n'avez aucun rdv");
    }
    return rdv;
  }
  //suppression defimitive
  async deleteOne(id: string) {
    return await this.rdvRepository.delete(id);
  }
  //suppression partielle
  async deletePartielle(id: string) {
    return await this.rdvRepository.softDelete(id);
  }
  async restore(id: string) {
    return await this.rdvRepository.restore(id);
  }
  //nouveau don
  async nouveauRdv(nouveau: RdvDto): Promise<RdvEntity> {
    return await this.rdvRepository.save(nouveau);
  }

  // modification
  async modificationRdv(id: string, rdvModif: ModifRdv): Promise<RdvEntity> {
    const rdv = await this.rdvRepository.preload({
      id,
      ...rdvModif,
    });
    if (!rdv) {
      throw new NotFoundException(
        `Le rdv correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return await this.rdvRepository.save(rdv);
  }
}
