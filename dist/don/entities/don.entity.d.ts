import { TimeStamps } from '../../Times/timestamp.entity';
export declare class donEntity extends TimeStamps {
    id: string;
    type: string;
    designation: string;
    montant?: number;
    devise?: string;
}
