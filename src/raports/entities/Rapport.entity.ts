import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamps } from 'src/Times/timestamp.entity';

export class RapportEntity extends TimeStamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nomsPatient: string;

  @Column()
  objet: string;

  @Column()
  desrciption: string;

  @Column()
  medeccin: [];
}
