import { TimeStamps } from 'src/Times/timestamp.entity';
import { MeddecinEntity } from '../../meddecin/entities/meddecin.entity';
export declare class RapportEntity extends TimeStamps {
    id: string;
    patient: string;
    objet: string;
    description: string;
    meddecin: MeddecinEntity;
}
