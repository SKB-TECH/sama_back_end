import { TimeStamps } from '../../Times/timestamp.entity';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { categirie_don, type_donateur } from '../don_enum/donateur_type';

@Entity('don')
export class donEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    length: 255,
  })
  donateur: string;
  @Column({
    type: 'enum',
    enum: type_donateur,
    default: type_donateur.INDIVIDUEL,
  })
  type: string;
  @Column({
    type: 'enum',
    enum: categirie_don,
    default: categirie_don.ESPECE,
  })
  categorie: string;
  @Column({ length: 255 })
  designation: string;
  @Column()
  montant: number;
  @Column({ length: 55 })
  devise: string;
}
