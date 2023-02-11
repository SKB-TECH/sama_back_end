import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Meddecin_enum } from '../meddecin_enum/meddecin_enum';

@Entity('meddecin')
export class MeddecinEntity {
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
}
