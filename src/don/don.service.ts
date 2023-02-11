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
}
