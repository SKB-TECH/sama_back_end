import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TimeStamps } from 'src/Times/timestamp.entity';

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
}
