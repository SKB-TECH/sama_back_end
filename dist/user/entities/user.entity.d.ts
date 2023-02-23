import { TimeStamps } from '../../Times/timestamp.entity';
import { RapportEntity } from 'src/raport/entities/Rapport.entity';
export declare class UserEntity extends TimeStamps {
    id: string;
    username: string;
    password: string;
    email: string;
    role: string;
    salt: string;
    status: string;
    rapport: RapportEntity[];
}
