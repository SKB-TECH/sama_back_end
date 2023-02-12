import { MeddecinService } from './meddecin.service';
import { NouveauMeddecin } from './DTO/nouveauMeddecin';
import { MeddecinEntity } from './entities/meddecin.entity';
import { MeddecinModif } from './DTO/meddecinModif';
export declare class MeddecinController {
    private meddecinService;
    constructor(meddecinService: MeddecinService);
    nouveau(med: NouveauMeddecin): Promise<MeddecinEntity>;
    getOneDon(id: string): Promise<MeddecinEntity[]>;
    getAllDon(): Promise<MeddecinEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deleteDefinitive(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    updateCv(modifier: MeddecinModif, id: string): Promise<MeddecinEntity>;
}
