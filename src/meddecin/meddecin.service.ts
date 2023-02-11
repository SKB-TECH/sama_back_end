import { Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from 'typeorm';
import { MeddecinEntity } from './entities/meddecin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NouveauDon } from "../don/DTO/nouveauDon";
import { donEntity } from "../don/entities/don.entity";
import { ModifDon } from "../don/DTO/modifDon";

@Injectable()
export class MeddecinService {
  constructor(
    @InjectRepository(MeddecinEntity)
    private meddecinRepository: Repository<MeddecinEntity>,
  ) {}
  async find(id: string) {
    const med = await this.meddecinRepository.findBy({
      id: id,
    });
    if (!med) {
      throw new NotFoundException(
        `Le meddecin correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return med;
  }

  //findoneDon
  async getOneDon(id: string) {
    return this.find(id);
  }
  async getAll() {
    const meds = await this.meddecinRepository.find();
    if (!meds) {
      throw new NotFoundException("Vous n'avez aucun meddecins");
    }
    return meds;
  }
  //suppression defimitive
  async deleteOne(id: string) {
    return await this.meddecinRepository.delete(id);
  }
  //suppression partielle
  async deletePartielle(id: string) {
    return await this.meddecinRepository.softDelete(id);
  }
  async restore(id: string) {
    return await this.meddecinRepository.restore(id);
  }
  //nouveau don
  async nouveauDon(nouveau: NouveauDon): Promise<MeddecinEntity> {
    return await this.meddecinRepository.save(nouveau);
  }

  // modification
  async modificationDon(id: string, donModif: ModifDon): Promise<MeddecinEntity> {
    const medM = await this.meddecinRepository.preload({
      id,
      ...donModif,
    });
    if (!medM) {
      throw new NotFoundException(
        `Le meddecin correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return await this.meddecinRepository.save(medM);
  }
}
