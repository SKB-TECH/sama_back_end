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

  //findoneDon
  async getOneDon(id: string) {
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
  async getAll() {
    const don = await this.donRepository.find();
    if (!don) {
      throw new NotFoundException("Vous n'avez aucun don");
    }
    return don;
  }

  //suppression defimitive
  async deleteOne(id: string) {
    const don = await this.donRepository.findBy({
      id: id,
    });
    return await this.donRepository.delete(id);
  }
  //suppression partielle

  // async deleteDefinitive(id: string) {
  //   const don= await this.donRepository.findBy({
  //     id:id,
  //   })
  // }
}
