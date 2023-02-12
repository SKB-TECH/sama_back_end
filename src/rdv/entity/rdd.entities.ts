import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('rdv')
export class RdvEntity {
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
}
