import { TimeStamps } from '../../Times/timestamp.entity';
import { RapportEntity } from '../../raport/entities/Rapport.entity';
export declare class MeddecinEntity extends TimeStamps {
    id: string;
    noms: string;
    telepone: string;
    email: string;
    specialite: string;
    photo: string;
    rapport: RapportEntity[];
}
