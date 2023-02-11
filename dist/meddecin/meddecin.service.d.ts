import { Repository } from 'typeorm';
import { MeddecinEntity } from './entities/meddecin.entity';
import { NouveauDon } from "../don/DTO/nouveauDon";
import { ModifDon } from "../don/DTO/modifDon";
export declare class MeddecinService {
    private meddecinRepository;
    constructor(meddecinRepository: Repository<MeddecinEntity>);
    find(id: string): Promise<MeddecinEntity[]>;
    getOneDon(id: string): Promise<MeddecinEntity[]>;
    getAll(): Promise<MeddecinEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deletePartielle(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauDon(nouveau: NouveauDon): Promise<MeddecinEntity>;
    modificationDon(id: string, donModif: ModifDon): Promise<MeddecinEntity>;
}
