import { TimeStamps } from 'src/Times/timestamp.entity';
import { UserEntity } from 'src/user/entities/user.entity';
export declare class RapportEntity extends TimeStamps {
    id: string;
    patient: string;
    objet: string;
    description: string;
    user: UserEntity[];
}
