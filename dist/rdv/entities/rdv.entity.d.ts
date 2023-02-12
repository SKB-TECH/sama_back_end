import { TimeStamps } from '../../Times/timestamp.entity';
export declare class RdvEntity extends TimeStamps {
    id: string;
    noms: string;
    telephone: string;
    email: string;
    object: string;
    dateRdv: string;
    heureRdv: string;
    commentaire: string;
}
