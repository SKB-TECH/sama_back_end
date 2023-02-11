import { DonService } from './don.service';
import { donEntity } from './entities/don.entity';
export declare class DonController {
    private donService;
    constructor(donService: DonService);
    getOneDon(id: string): Promise<donEntity[]>;
    getAllDon(): Promise<donEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deleteDefinitive(id: string): Promise<import("typeorm").UpdateResult>;
}
