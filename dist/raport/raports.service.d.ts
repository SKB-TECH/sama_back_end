import { Repository } from 'typeorm';
import { RapportEntity } from './entities/Rapport.entity';
import { NouveauRapport } from './DTO/NouveauRapport';
import { ModifRapport } from './DTO/ModifRapport';
export declare class RaportService {
    private readonly RapportRepository;
    constructor(RapportRepository: Repository<RapportEntity>);
    find(id: string): Promise<RapportEntity[]>;
    getOneDon(id: string): Promise<RapportEntity[]>;
    getAll(): Promise<RapportEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deletePartielle(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauRapport(nouveau: NouveauRapport): Promise<RapportEntity>;
    modificationRapport(id: string, rapportModif: ModifRapport): Promise<RapportEntity>;
}
