import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { RapportEntity } from './entities/Rapport.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NouveauRapport } from './DTO/NouveauRapport';
import { ModifRapport } from './DTO/ModifRapport';

@Injectable()
export class RaportService {
  constructor(
    @InjectRepository(RapportEntity)
    private readonly RapportRepository: Repository<RapportEntity>,
  ) {}
  //find
  async find(id: string) {
    const rapport = await this.RapportRepository.findBy({
      id: id,
    });
    if (!rapport) {
      throw new NotFoundException(
        `Le raport correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return rapport;
  }

  //findoneDon
  async getOneDon(id: string) {
    return this.find(id);
  }

  //   get all
  async getAll() {
    const rapport = await this.RapportRepository.find();
    if (!rapport) {
      throw new NotFoundException("Vous n'avez aucun rapport");
    }
    return rapport;
  }
  //suppression defimitive
  async deleteOne(id: string) {
    return await this.RapportRepository.delete(id);
  }
  //suppression partielle
  async deletePartielle(id: string) {
    return await this.RapportRepository.softDelete(id);
  }
  async restore(id: string) {
    return await this.RapportRepository.restore(id);
  }
  //nouveau don
  async nouveauRapport(nouveau: NouveauRapport): Promise<RapportEntity> {
    return await this.RapportRepository.save(nouveau);
  }

  // modification
  async modificationRapport(
    id: string,
    rapportModif: ModifRapport,
  ): Promise<RapportEntity> {
    const donM = await this.RapportRepository.preload({
      id,
      ...rapportModif,
    });
    if (!donM) {
      throw new NotFoundException(
        `Le don correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return await this.RapportRepository.save(donM);
  }
}
