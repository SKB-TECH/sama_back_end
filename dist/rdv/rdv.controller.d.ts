import { RdvService } from './rdv.service';
import { RdvDto } from './DTO/RdvDto';
import { RdvEntity } from './entities/rdv.entity';
import { ModifRdv } from './DTO/modifRdv';
export declare class RdvController {
    private rdvService;
    constructor(rdvService: RdvService);
    nouveau(rdv: RdvDto): Promise<RdvEntity>;
    getOneDon(id: string): Promise<RdvEntity[]>;
    getAllDon(): Promise<RdvEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deleteDefinitive(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    updateCv(modifier: ModifRdv, id: string): Promise<RdvEntity>;
}
