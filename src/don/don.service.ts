import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { donEntity } from './entities/don.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DonService {
  constructor(
    @InjectRepository(donEntity)
    private donRepository: Repository<donEntity>,
  ) {}
  //find
  async find(id: string) {
    const don = await this.donRepository.findBy({
      id: id,
    });
    if (!don) {
      throw new NotFoundException(
        `Le don correspondant a cet id: ${id} n'existe pas `,
      );
    }
    return don;
  }

  //findoneDon
  async getOneDon(id: string) {
    return this.find(id);
  }
  async getAll() {
    const don = await this.donRepository.find();
    if (!don) {
      throw new NotFoundException("Vous n'avez aucun don");
    }
    return don;
  }
  //suppression defimitive
  async deleteOne(id: string) {
    return await this.donRepository.delete(id);
  }
  //suppression partielle
  async deletePartielle(id: string) {
    return await this.donRepository.softDelete(id);
  }
  async restore(id: string) {
    return await this.donRepository.restore(id)
  }
}
