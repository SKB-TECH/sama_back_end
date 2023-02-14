import { Repository } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { RdvDto } from "../rdv/DTO/RdvDto";
import { RdvEntity } from "../rdv/entities/rdv.entity";
import { ModifRdv } from "../rdv/DTO/modifRdv";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    find(id: string): Promise<UserEntity[]>;
    getOneDon(id: string): Promise<UserEntity[]>;
    getAll(): Promise<UserEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    bloquer(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauRdv(nouveau: RdvDto, med: string): Promise<RdvEntity>;
    modificationRdv(id: string, rdvModif: ModifRdv): Promise<RdvEntity>;
}
