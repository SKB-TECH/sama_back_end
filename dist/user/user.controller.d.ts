import { UserDto } from './DTO/UserDto';
import { UserEntity } from './entities/user.entity';
import { ModifUser } from './DTO/ModifUser';
import { UserService } from './user.service';
import { LoginDto } from "./LoginDto";
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    nouveau(user: UserDto): Promise<Partial<UserEntity>>;
    getOneDon(id: string): Promise<UserEntity[]>;
    getAllDon(): Promise<UserEntity[]>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    deleteDefinitive(id: string): Promise<import("typeorm").UpdateResult>;
    restore(id: string): Promise<import("typeorm").UpdateResult>;
    updateCv(modifier: ModifUser, id: string): Promise<UserEntity>;
    login(credentials: LoginDto): Promise<Partial<UserEntity>>;
}
