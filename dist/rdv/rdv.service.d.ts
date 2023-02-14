import { Repository } from 'typeorm';
import { RdvEntity } from './entities/rdv.entity';
import { RdvDto } from './DTO/RdvDto';
import { ModifRdv } from './DTO/modifRdv';
import { MailerService } from '@nestjs-modules/mailer';
export declare class RdvService {
    private rdvRepository;
    private mailService;
    constructor(rdvRepository: Repository<RdvEntity>, mailService: MailerService);
    find(id: string): Promise<RdvEntity[]>;
    getOneDon(id: string): Promise<RdvEntity[]>;
    getAll(): Promise<RdvEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deletePartielle(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauRdv(nouveau: RdvDto, med: string): Promise<RdvEntity>;
    modificationRdv(id: string, rdvModif: ModifRdv): Promise<RdvEntity>;
}
