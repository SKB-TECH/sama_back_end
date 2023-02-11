import { donEntity } from './entities/don.entity';
import { Repository } from 'typeorm';
import { NouveauDon } from './DTO/nouveauDon';
import { ModifDon } from './DTO/modifDon';
export declare class DonService {
    private donRepository;
    constructor(donRepository: Repository<donEntity>);
    find(id: string): Promise<donEntity[]>;
    getOneDon(id: string): Promise<donEntity[]>;
    getAll(): Promise<donEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deletePartielle(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauDon(nouveau: NouveauDon): Promise<donEntity>;
    modificationDon(id: string, donModif: ModifDon): Promise<donEntity>;
}
