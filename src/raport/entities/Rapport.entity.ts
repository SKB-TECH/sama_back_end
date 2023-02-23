import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamps } from 'src/Times/timestamp.entity';
import { MeddecinEntity } from '../../meddecin/entities/meddecin.entity';
import { type } from 'os';

@Entity('rapport')
export class RapportEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  patient: string;

  @Column()
  objet: string;

  @Column()
  description: string;

  @ManyToOne((type) => MeddecinEntity, (meddecin) => meddecin.rapport)
  meddecin: MeddecinEntity;
}
