import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserDto } from "./DTO/UserDto";
import { ModifUser } from "./DTO/ModifUser";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    find(id: string): Promise<UserEntity[]>;
    getOneDon(id: string): Promise<UserEntity[]>;
    getAll(): Promise<UserEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    bloquer(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauRdv(nouveau: UserDto): Promise<UserEntity>;
    modificationRdv(id: string, userModif: ModifUser): Promise<UserEntity>;
}
