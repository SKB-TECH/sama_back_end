import { RaportService } from './raports.service';
import { NouveauRapport } from './DTO/NouveauRapport';
import { RapportEntity } from './entities/Rapport.entity';
import { ModifRapport } from './DTO/ModifRapport';
export declare class RaportController {
    private RapportService;
    constructor(RapportService: RaportService);
    nouveau(rapport: NouveauRapport, request: any): Promise<RapportEntity>;
    getOneDon(id: string): Promise<RapportEntity[]>;
    getAll(): Promise<RapportEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deleteDefinitive(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    updateCv(modifier: ModifRapport, id: string): Promise<RapportEntity>;
}
