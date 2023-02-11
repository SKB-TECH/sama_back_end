import { donEntity } from './entities/don.entity';
import { Repository } from 'typeorm';
export declare class DonService {
    private donRepository;
    constructor(donRepository: Repository<donEntity>);
    getOneDon(id: string): Promise<donEntity[]>;
    getAll(): Promise<donEntity[]>;
}
