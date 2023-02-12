import { Repository } from 'typeorm';
import { RdvEntity } from './entities/rdv.entity';
import { RdvDto } from './DTO/RdvDto';
import { ModifRdv } from './DTO/modifRdv';
export declare class RdvService {
    private rdvRepository;
    constructor(rdvRepository: Repository<RdvEntity>);
    find(id: string): Promise<RdvEntity[]>;
    getOneDon(id: string): Promise<RdvEntity[]>;
    getAll(): Promise<RdvEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deletePartielle(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauRdv(nouveau: RdvDto): Promise<RdvEntity>;
    modificationRdv(id: string, rdvModif: ModifRdv): Promise<RdvEntity>;
}
