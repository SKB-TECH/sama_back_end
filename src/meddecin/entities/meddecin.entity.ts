import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Meddecin_enum } from '../meddecin_enum/meddecin_enum';
import { TimeStamps } from '../../Times/timestamp.entity';
import { RapportEntity } from '../../raport/entities/Rapport.entity';

@Entity('meddecin')
export class MeddecinEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 255,
  })
  noms: string;
  @Column({
    length: 25,
  })
  @Column({
    type: 'enum',
    enum: Meddecin_enum,
    default: Meddecin_enum.Homme,
  })
  telepone: string;
  @Column()
  email: string;

  @Column()
  specialite: string;

  @Column()
  photo: string;

  @OneToMany((type) => RapportEntity, (rapport) => rapport.meddecin)
  rapport: RapportEntity[];
}
