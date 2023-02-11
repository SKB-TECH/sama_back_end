import { DonService } from './don.service';
import { donEntity } from './entities/don.entity';
import { NouveauDon } from './DTO/nouveauDon';
import { ModifDon } from "./DTO/modifDon";
export declare class DonController {
    private donService;
    constructor(donService: DonService);
    nouveau(don: NouveauDon): Promise<donEntity>;
    getOneDon(id: string): Promise<donEntity[]>;
    getAllDon(): Promise<donEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deleteDefinitive(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    updateCv(modifier: ModifDon, id: string): Promise<donEntity>;
}
