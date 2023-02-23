import { TimeStamps } from 'src/Times/timestamp.entity';
export declare class RapportEntity extends TimeStamps {
    id: string;
    patient: string;
    objet: string;
    description: string;
}
