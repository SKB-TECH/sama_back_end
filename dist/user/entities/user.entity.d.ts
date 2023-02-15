import { TimeStamps } from '../../Times/timestamp.entity';
export declare class UserEntity extends TimeStamps {
    id: string;
    username: string;
    password: string;
    email: string;
    role: string;
    salt: string;
    status: string;
}
