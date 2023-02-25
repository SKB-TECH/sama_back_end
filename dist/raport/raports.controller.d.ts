import { RaportService } from './raports.service';
import { NouveauRapport } from './DTO/NouveauRapport';
import { RapportEntity } from './entities/Rapport.entity';
import { ModifRapport } from './DTO/ModifRapport';
import { UserEntity } from '../user/entities/user.entity';
export declare class RaportController {
    private RapportService;
    constructor(RapportService: RaportService);
    nouveau(rapport: NouveauRapport, user: UserEntity): Promise<RapportEntity>;
    getOneDon(id: string): Promise<RapportEntity[]>;
    getAll(user: UserEntity): Promise<RapportEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deleteDefinitive(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    updateCv(modifier: ModifRapport, id: string): Promise<RapportEntity>;
}
