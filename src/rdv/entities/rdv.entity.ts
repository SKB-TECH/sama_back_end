import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamps } from '../../Times/timestamp.entity';
import { Rdv_enum } from '../rdv_enum/rdv_enum';

@Entity('rdv')
export class RdvEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 255,
  })
  noms: string;
  @Column({
    length: 25,
  })
  telephone: string;
  @Column({
    length: 255,
  })
  email: string;

  @Column({
    length: 255,
  })
  object: string;
  @Column()
  dateRdv: string;
  @Column()
  heureRdv: string;
  @Column()
  commentaire: string;

  @Column({
    type: 'enum',
    enum: Rdv_enum,
    default: Rdv_enum.INVALIDE,
  })
  status: string;
}
