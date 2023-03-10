import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserDto } from './DTO/UserDto';
import { ModifUser } from './DTO/ModifUser';
import { LoginDto } from './DTO/LoginDto';
import { JwtService } from '@nestjs/jwt';
export declare class UserService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<UserEntity>, jwtService: JwtService);
    find(id: string): Promise<UserEntity[]>;
    getOneDon(id: string): Promise<UserEntity[]>;
    getAll(): Promise<UserEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    bloquer(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    nouveauRdv(users: UserDto): Promise<Partial<UserEntity>>;
    modificationRdv(id: string, userModif: ModifUser): Promise<UserEntity>;
    login(credential: LoginDto): Promise<{
        access_token: string;
    }>;
}
