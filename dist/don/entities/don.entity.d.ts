import { TimeStamps } from '../../Times/timestamp.entity';
export declare class donEntity extends TimeStamps {
    id: string;
    donateur: string;
    type: string;
    categorie: string;
    designation: string;
    montant?: number;
    devise?: string;
}
