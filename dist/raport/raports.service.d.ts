import { Repository } from 'typeorm';
import { RapportEntity } from './entities/Rapport.entity';
import { NouveauRapport } from './DTO/NouveauRapport';
import { ModifRapport } from './DTO/ModifRapport';
import { UserEntity } from '../user/entities/user.entity';
export declare class RaportService {
    private readonly RapportRepository;
    constructor(RapportRepository: Repository<RapportEntity>);
    find(id: string): Promise<RapportEntity[]>;
    getOneDon(id: string): Promise<RapportEntity[]>;
    getAll(user: UserEntity): Promise<RapportEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deletePartielle(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauRapport(nouveau: NouveauRapport, user: any): Promise<RapportEntity>;
    modificationRapport(id: string, rapportModif: ModifRapport): Promise<RapportEntity>;
}
