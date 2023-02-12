import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MeddecinEntity } from './entities/meddecin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NouveauMeddecin } from './DTO/nouveauMeddecin';
import { MeddecinModif } from './DTO/meddecinModif';

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
  async getOneMed(id: string) {
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
  async nouveauDon(nouveau: NouveauMeddecin): Promise<MeddecinEntity> {
    return await this.meddecinRepository.save(nouveau);
  }

  // modification
  async modificationMed(
    id: string,
    medModif: MeddecinModif,
  ): Promise<MeddecinEntity> {
    const medM = await this.meddecinRepository.preload({
      id,
      ...medModif,
    });
    if (!medM) {
      throw new NotFoundException(
        `Le meddecin correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return await this.meddecinRepository.save(medM);
  }
}
